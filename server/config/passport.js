const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UsersModel = require("../models/users.model");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    let user = {};
    try {
      user = await UsersModel.findByUsername(username);

      if (!user) {
        return done(null, false);
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_SECRET
    },
    async (jwt_payload, done) => {
      try {
        const data = await UsersModel.findById(jwt_payload.docID);
        return done(null, data.value);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
