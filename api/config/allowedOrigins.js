// This file can be use to whitelist accepted origins from where requests
// are allowed to come from.

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

const allowedOrigins = [
  `http://localhost:${port}`,
  `http://127.0.0.1:${port}`,
  `http://${host}:${port}`,
  "http://35.192.139.25"
];

module.exports = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
};
