const crypto = require("crypto");
const { signToken } = require("./_lib");

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const password = req.body && req.body.password;
  const expected = process.env.ADMIN_PASSWORD || "";

  const providedBuf = Buffer.from(String(password || ""));
  const expectedBuf = Buffer.from(expected);
  const valid =
    providedBuf.length === expectedBuf.length &&
    crypto.timingSafeEqual(providedBuf, expectedBuf) &&
    expected.length > 0;

  if (!valid) {
    res.status(401).json({ error: "Wrong password" });
    return;
  }

  res.status(200).json({ token: signToken() });
};
