/**
 * Cloudflare Pages Function: /api/subscribe
 * POST — adds a subscriber to Kit via v4 API
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   KIT_API_KEY  — Kit v4 API secret key (starts with "kit_")
 *   KIT_FORM_ID  — Kit Form ID to associate the subscriber with (numbers only)
 *   KIT_TAG_ID   — (optional) Tag ID to apply on subscribe
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const KIT_BASE = 'https://api.kit.com/v4';

export async function onRequest({ request, env }) {

  // ── OPTIONS preflight ──────────────────────────────────────────────────
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  // ── Only allow POST ────────────────────────────────────────────────────
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  // ── Parse body ─────────────────────────────────────────────────────────
  let body;
  try { body = await request.json(); }
  catch { return json({ error: 'Invalid JSON body' }, 400); }

  const email      = (body.email      || '').trim().toLowerCase();
  const first_name = (body.first_name || body.name || '').trim();
  const source     = (body.source     || 'website').trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Valid email required' }, 400);
  }

  // ── Kit credentials ────────────────────────────────────────────────────
  const KIT_API_KEY = env.KIT_API_KEY;
  const KIT_FORM_ID = env.KIT_FORM_ID;
  const KIT_TAG_ID  = env.KIT_TAG_ID || '';

  if (!KIT_API_KEY) {
    console.warn('[subscribe] Kit not configured — email captured but not forwarded:', email);
    return json({ success: true, message: 'Subscribed (local capture)' }, 200);
  }

  const kitHeaders = {
    'Content-Type':  'application/json',
    'X-Kit-Api-Key': KIT_API_KEY,
  };

  // ── Step 1: Create or fetch subscriber ─────────────────────────────────
  // The v4 API idempotently creates a subscriber and returns the existing
  // one if the email already exists.
  let subscriberId;
  try {
    const createRes = await fetch(`${KIT_BASE}/subscribers`, {
      method:  'POST',
      headers: kitHeaders,
      body:    JSON.stringify({
        email_address: email,
        first_name:    first_name || undefined,
        state:         'active',
        fields:        source ? { source } : undefined,
      }),
    });

    if (!createRes.ok && createRes.status !== 201 && createRes.status !== 200) {
      const errText = await createRes.text().catch(() => '');
      console.error('[subscribe] Create failed:', createRes.status, errText);
      return json({ error: 'Email service error. Please try again.' }, 502);
    }

    const createData = await createRes.json();
    subscriberId = createData?.subscriber?.id;

    if (!subscriberId) {
      console.error('[subscribe] Missing subscriber id in response:', createData);
      return json({ error: 'Email service error. Please try again.' }, 502);
    }
  } catch (err) {
    console.error('[subscribe] Network error on create:', err);
    return json({ error: 'Could not reach email service. Please try again.' }, 502);
  }

  // ── Step 2: Associate with form (optional but recommended for tracking) ─
  if (KIT_FORM_ID) {
    try {
      const formRes = await fetch(
        `${KIT_BASE}/forms/${KIT_FORM_ID}/subscribers/${subscriberId}`,
        { method: 'POST', headers: kitHeaders }
      );
      if (!formRes.ok) {
        const errText = await formRes.text().catch(() => '');
        console.warn('[subscribe] Form association failed (non-fatal):', formRes.status, errText);
      }
    } catch (e) {
      console.warn('[subscribe] Form association error (non-fatal):', e);
    }
  }

  // ── Step 3: Apply tag if configured ────────────────────────────────────
  if (KIT_TAG_ID) {
    try {
      const tagRes = await fetch(
        `${KIT_BASE}/tags/${KIT_TAG_ID}/subscribers/${subscriberId}`,
        { method: 'POST', headers: kitHeaders }
      );
      if (!tagRes.ok) {
        const errText = await tagRes.text().catch(() => '');
        console.warn('[subscribe] Tag apply failed (non-fatal):', tagRes.status, errText);
      }
    } catch (e) {
      console.warn('[subscribe] Tag apply error (non-fatal):', e);
    }
  }

  return json({ success: true, message: 'Thanks! Check your inbox.' }, 200);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
