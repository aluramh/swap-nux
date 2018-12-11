const express = require("express");
const api = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const encrypt = require("../config/encryption");

const extract = ({ docID: id, email, name, phone, position, isPremium }) => ({
  id,
  email,
  name,
  phone,
  position,
  isPremium
});

api.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const user = extract(req.user);

    res.json({
      user
    });
  }
);

api.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    // Add token config options
    const tokenOptions = {
      expiresIn: "10m"
    };
    const token = jwt.sign(req.user, process.env.TOKEN_SECRET, tokenOptions);
    res.json({
      token
    });
  }
);

api.post("/encrypt", async (req, res, next) => {
  try {
    // Get password from req.body and check if there indeed was a password.
    const password = req.body.password;
    if (!password || password == "") {
      throw "ERROR: No plaintext password to encrypt.";
    }

    // Encrypt the password (TO-DO: Move to external server or different route).
    const encryptedPassword = await encrypt(password);
    // Return encrypted password.
    res.send(encryptedPassword);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = api;
