// Shared helpers for the admin serverless functions.
// Files prefixed with "_" are ignored as routes by Vercel, so this is
// safe to import from api/admin-login.js and api/admin-mutate.js.
const crypto = require("crypto");

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function signToken() {
  const expiry = Date.now() + TOKEN_TTL_MS;
  const signature = crypto
    .createHmac("sha256", process.env.ADMIN_TOKEN_SECRET)
    .update(String(expiry))
    .digest("hex");
  return expiry + "." + signature;
}

function verifyToken(token) {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [expiryStr, signature] = parts;
  const expected = crypto
    .createHmac("sha256", process.env.ADMIN_TOKEN_SECRET)
    .update(expiryStr)
    .digest("hex");

  var expectedBuf = Buffer.from(expected);
  var signatureBuf = Buffer.from(signature);
  if (expectedBuf.length !== signatureBuf.length) return false;
  if (!crypto.timingSafeEqual(expectedBuf, signatureBuf)) return false;

  const expiry = Number(expiryStr);
  return Number.isFinite(expiry) && expiry > Date.now();
}

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;

async function supabaseRequest(path, options) {
  const res = await fetch(SUPABASE_URL + path, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: "Bearer " + process.env.SUPABASE_SERVICE_ROLE_KEY,
      "Content-Type": "application/json",
      ...(options && options.headers),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error("Supabase request failed (" + res.status + "): " + text);
  }
  if (res.status === 204) return null;
  return res.json().catch(() => null);
}

module.exports = { signToken, verifyToken, supabaseRequest };
