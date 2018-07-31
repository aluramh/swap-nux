const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const passport = require("passport");
const encrypt = require("../config/encryption");

/* POST login. */
router.post("/login", (req, res, next) => {
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

router.post("/encrypt", async (req, res, next) => {
  try {
    // Get password from req.body and check if there indeed was a password.
    const password = req.body.password;
    if (!password || password == "") {
      throw "ERROR: No plaintext password to encrypt.";
    }

    // Encrypt the password (TO-DO: Move to external server or different route).
    const encryptedPassword = await encrypt(password);
    console.log({ password, encryptedPassword });

    // Return encrypted password.
    res.send(encryptedPassword);
  } catch (e) {
    // next(e);
    res.status(500).send(e);
  }
});

module.exports = router;
