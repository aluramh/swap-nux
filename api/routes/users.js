const express = require("express");
const router = express.Router();
const user = require("../models/user");

// Searches for a single user in the DB. Returns true if that user exists,
// or false if it doesn't.
// You have to send an email as an email param.
// NOTE: This is because some work that Oscar is doing, but, as I mentioned,
// there are better ways to achieve what he is trying to do (that also doesn't need this API).
router.get("/", async (req, res, next) => {
  try {
    const { email } = req.query;
    const [data] = await user.getUserByFields({ email: email });
    res.send(Boolean(data));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
