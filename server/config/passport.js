const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/User')
const bcrypt = require('bcrypt')


passport.use(new LocalStrategy(
  async (username, password, done) => {
    let user = {}
    try {
      user = await User.findByUsername(username)

      if (!user) {
        return done(null, false)
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false)
      }

      return done(null, user)

    } catch (err) {
      return done(null, false)
    }

  }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
  },
  async (jwt_payload, done) => {
    try {
      const data = await User.findById(jwt_payload.docID)
      return done(null, data.value)
    } catch (error) {
      return done(error)
    }
  }
));


module.exports = passport