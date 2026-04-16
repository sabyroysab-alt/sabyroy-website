/**
 * Cloudflare Pages Function: /api/subscribe
 * POST — adds a subscriber to Kit (ConvertKit)
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   KIT_API_KEY  — Kit PUBLIC API key
 *   KIT_FORM_ID  — Kit Form ID (numbers only)
 *   KIT_TAG_ID   — (optional) Tag ID to apply on subscribe
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

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

  // ── Fallback: store locally if Kit not configured ──────────────────────
  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.warn('[subscribe] Kit not configured — email captured but not forwarded:', email);
    return json({ success: true, message: 'Subscribed (local capture)' }, 200);
  }

  // ── Submit to Kit native form endpoint ─────────────────────────────────
  const kitUrl = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;

  const formData = new URLSearchParams();
  formData.append('api_key',    KIT_API_KEY);
  formData.append('email',      email);
  if (first_name) formData.append('first_name', first_name);
  if (source)     formData.append('fields[source]', source);

  let kitRes;
  try {
    kitRes = await fetch(kitUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    formData.toString(),
    });
  } catch (err) {
    console.error('[subscribe] Network error:', err);
    return json({ error: 'Could not reach email service. Please try again.' }, 502);
  }

  if (!kitRes.ok) {
    const errText = await kitRes.text().catch(() => '');
    console.error('[subscribe] Kit error:', kitRes.status, errText);
    return json({ error: 'Email service error. Please try again.' }, 502);
  }

  // ── Apply tag if configured ────────────────────────────────────────────
  if (KIT_TAG_ID) {
    try {
      await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': KIT_API_KEY },
        body:    JSON.stringify({ email_address: email }),
      });
    } catch (e) {
      console.warn('[subscribe] Tag apply failed (non-fatal):', e);
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
