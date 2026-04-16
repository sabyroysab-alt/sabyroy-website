/**
 * Netlify Function: subscribe
 * POST /api/subscribe
 *
 * Subscribes an email address to a Kit (ConvertKit) form via the v4 API.
 * Environment variables required:
 *   KIT_API_KEY  — Kit API secret key
 *   KIT_FORM_ID  — Kit form ID to subscribe to
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async function (event) {
  // ── OPTIONS preflight ──────────────────────────────────────────────────
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  // ── Only allow POST ────────────────────────────────────────────────────
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // ── Parse body ─────────────────────────────────────────────────────────
  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { email, first_name = '', source = 'website', tag_id, fields } = body;

  if (!email || !email.includes('@')) {
    return {
      statusCode: 400,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'A valid email address is required' }),
    };
  }

  // ── Kit credentials from environment ──────────────────────────────────
  const KIT_API_KEY = process.env.KIT_API_KEY;
  const KIT_FORM_ID = process.env.KIT_FORM_ID;
  const KIT_TAG_ID = process.env.KIT_TAG_ID;

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('[subscribe] Missing KIT_API_KEY or KIT_FORM_ID env vars');
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Email service not configured on server' }),
    };
  }

  // ── Subscribe via Kit form (triggers incentive email) ───────────────
  const formData = new URLSearchParams();
  formData.append('email_address', email);
  if (first_name) formData.append('first_name', first_name);

  let kitRes;
  try {
    kitRes = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      redirect: 'manual',
    });
  } catch (networkErr) {
    console.error('[subscribe] Network error calling Kit:', networkErr);
    return {
      statusCode: 502,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not reach email service. Please try again.' }),
    };
  }

  // Kit returns 302 on success (redirect to success page)
  if (kitRes.status !== 302 && kitRes.status !== 200) {
    console.error('[subscribe] Kit form error:', kitRes.status);
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Subscription failed. Please try again.' }),
    };
  }

  // ── Tag the subscriber via v4 API ──────────────────────────────────────
  if (KIT_TAG_ID) {
    try {
      const subRes = await fetch(`https://api.kit.com/v4/subscribers?email_address=${encodeURIComponent(email)}`, {
        headers: { 'X-Kit-Api-Key': KIT_API_KEY },
      });
      const subData = await subRes.json().catch(() => ({}));
      const subId = subData?.subscribers?.[0]?.id;
      if (subId) {
        await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Kit-Api-Key': KIT_API_KEY,
          },
          body: JSON.stringify({ subscriber_id: subId }),
        });
      }
    } catch {}
  }

  // ── Success ────────────────────────────────────────────────────────────
  console.log(`[subscribe] Subscribed: ${email} | source: ${source}`);

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, message: 'Subscribed!' }),
  };
};
