const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const passport = require("passport");

/* POST login. */
router.post("/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).send({
        message: info ? info.message : "Login failed",
        user: user,
        err
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user, "your_jwt_secret");

      return res.json({ user, token });
    });
  })(req, res, next);
});

module.exports = router;
