const express = require("express");
const api = express.Router();
const passport = require('passport')
const jwt = require("jsonwebtoken");

api.get('/user',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const extract = ({
      docID: id,
      email,
      name,
      phone,
      position,
      isPremium
    }) => ({
      id,
      email,
      name,
      phone,
      position,
      isPremium
    })
    const user = extract(req.user)

    res.json({
      user
    })
  }
)

api.post('/login',
  passport.authenticate('local', {
    session: false
  }),
  (req, res) => {
    // Add token config options
    const tokenOptions = {
      expiresIn: '10m'
    }
    const token = jwt.sign(req.user, process.env.TOKEN_SECRET, tokenOptions)
    res.json({
      token
    })
  }
)


module.exports = api
