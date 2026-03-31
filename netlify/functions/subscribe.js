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

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('[subscribe] Missing KIT_API_KEY or KIT_FORM_ID env vars');
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Email service not configured on server' }),
    };
  }

  // ── Call Kit API v4 ────────────────────────────────────────────────────
  const kitUrl = `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`;

  // Kit API v4 form endpoint expects email_address at the top level
  const payload = { email_address: email };
  if (first_name) payload.first_name = first_name;
  if (fields && typeof fields === 'object') payload.fields = fields;

  let kitRes;
  try {
    kitRes = await fetch(kitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    console.error('[subscribe] Network error calling Kit API:', networkErr);
    return {
      statusCode: 502,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not reach email service. Please try again.' }),
    };
  }

  if (!kitRes.ok) {
    let errBody = {};
    try { errBody = await kitRes.json(); } catch {}
    console.error('[subscribe] Kit API error:', kitRes.status, errBody);
    return {
      statusCode: kitRes.status,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: errBody.message || errBody.errors?.[0] || 'Subscription failed',
      }),
    };
  }

  // ── Success ────────────────────────────────────────────────────────────
  console.log(`[subscribe] Subscribed: ${email} | source: ${source}`);

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, message: 'Subscribed!' }),
  };
};
