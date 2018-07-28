const express = require("express");
const router = express.Router();
const user = require("../models/user");

// Get the current user's session.
router.get("/", async (req, res, next) => {
  try {
    const data = await user.getUser("-HWxC3twUx1iVI8N04xT89L");
    res.send(data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
