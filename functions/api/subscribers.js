/**
 * Cloudflare Pages Function: /api/subscribers
 * GET — returns subscriber list from Kit (admin only)
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   KIT_API_KEY   — Kit API secret key
 *   ADMIN_TOKEN   — Secret token for admin access
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

export async function onRequest({ request, env }) {

  // ── OPTIONS preflight ──────────────────────────────────────────────────
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  // ── Only allow GET ─────────────────────────────────────────────────────
  if (request.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405);
  }

  // ── Authenticate via X-Admin-Token ─────────────────────────────────────
  const ADMIN_TOKEN   = env.ADMIN_TOKEN;
  const providedToken = request.headers.get('X-Admin-Token');

  if (!ADMIN_TOKEN || !providedToken || providedToken !== ADMIN_TOKEN) {
    return json({ error: 'Unauthorized' }, 401);
  }

  // ── Kit credentials ────────────────────────────────────────────────────
  const KIT_API_KEY = env.KIT_API_KEY;

  if (!KIT_API_KEY) {
    return json({ error: 'Email service not configured on server' }, 500);
  }

  // ── Call Kit API v4 ────────────────────────────────────────────────────
  let kitRes;
  try {
    kitRes = await fetch('https://api.kit.com/v4/subscribers?per_page=500', {
      method:  'GET',
      headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': KIT_API_KEY },
    });
  } catch (err) {
    console.error('[subscribers] Network error:', err);
    return json({ error: 'Could not reach email service. Please try again.' }, 502);
  }

  if (!kitRes.ok) {
    const errBody = await kitRes.json().catch(() => ({}));
    return json({ error: errBody.message || 'Failed to fetch subscribers' }, kitRes.status);
  }

  const data        = await kitRes.json();
  const subscribers = data.subscribers || [];

  return json({
    subscribers,
    total: data.pagination?.total_count ?? subscribers.length,
  }, 200);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
