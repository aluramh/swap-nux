const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require("../models/user");
// const getDocument = require("../config/couchbase").getDocument;

// Declare and use the local strategy for authenticating.
const LocalStrategyHandler = new LocalStrategy((username, password, cb) => {
  // return cb(null, {
  //   username,
  //   password,
  //   name: "test"
  // });

  // Call the DB to query for similar users in the DB.
  return UserModel.getUser("-HWxC3twUx1iVI8N04xT89L")
    .then(rows => {
      const user = rows.value;

      // Check if it exists, or send error.
      if (!user) {
        return cb("User not found");
      }

      // Check if the password matches, or send error.
      if (user.password != password) {
        return cb("Password mismatch");
      }

      // User exists and password is correct. Continue with the next piece of code.
      return cb(null, user);
    })
    .catch(err => {
      console.error(err);
      return err;
    });
});

passport.use(LocalStrategyHandler);

module.exports = passport;
