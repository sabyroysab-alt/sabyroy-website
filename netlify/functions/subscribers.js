/**
 * Netlify Function: subscribers
 * GET /api/subscribers
 *
 * Returns the subscriber list from Kit (ConvertKit) v4 API.
 * Requires X-Admin-Token header matching the ADMIN_TOKEN env var.
 *
 * Environment variables required:
 *   KIT_API_KEY  — Kit API secret key
 *   ADMIN_TOKEN  — Secret token for admin access
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

  // ── Only allow GET ─────────────────────────────────────────────────────
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // ── Authenticate via X-Admin-Token ─────────────────────────────────────
  const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
  const providedToken = event.headers['x-admin-token'] || event.headers['X-Admin-Token'];

  if (!ADMIN_TOKEN || !providedToken || providedToken !== ADMIN_TOKEN) {
    return {
      statusCode: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Unauthorized' }),
    };
  }

  // ── Kit credentials ────────────────────────────────────────────────────
  const KIT_API_KEY = process.env.KIT_API_KEY;

  if (!KIT_API_KEY) {
    console.error('[subscribers] Missing KIT_API_KEY env var');
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Email service not configured on server' }),
    };
  }

  // ── Call Kit API v4 — paginate up to 500 ──────────────────────────────
  const kitUrl = 'https://api.kit.com/v4/subscribers?per_page=500';

  let kitRes;
  try {
    kitRes = await fetch(kitUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
    });
  } catch (networkErr) {
    console.error('[subscribers] Network error calling Kit API:', networkErr);
    return {
      statusCode: 502,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not reach email service. Please try again.' }),
    };
  }

  if (!kitRes.ok) {
    let errBody = {};
    try { errBody = await kitRes.json(); } catch {}
    console.error('[subscribers] Kit API error:', kitRes.status, errBody);
    return {
      statusCode: kitRes.status,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: errBody.message || errBody.errors?.[0] || 'Failed to fetch subscribers',
      }),
    };
  }

  // ── Return subscriber data ─────────────────────────────────────────────
  const data = await kitRes.json();
  const subscribers = data.subscribers || [];

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subscribers,
      total: data.pagination?.total_count ?? subscribers.length,
    }),
  };
};
