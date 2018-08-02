const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require("bcrypt");
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
  return UserModel.getUserByFields({ email: username })
    .then(async rows => {
      // Get the "user_bucket" (a.k.a.: value) from the first item in the array.
      const [{ user_bucket: user }] = rows;

      // Check if it exists, or send error.
      if (!user) {
        return cb("User not found");
      }

      // Now that we know the user exists, we encrypt the plaintext from the
      // login form. This is delayed because the encryption is CPU-intensive
      // so this way we are not wasting resources.
      const match = await bcrypt.compare(password, user.password);
      // Check if the password matches, or send error.
      if (!match) {
        return cb("Password mismatch");
      }

      // User exists and password is correct. Continue with the next piece of code.
      return cb(null, user);
    })
    .catch(err => {
      console.error(err);
      return cb(err);
    });
});

const JWTStrategyHandler = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "your_jwt_secret"
  },
  async (jwtPayload, cb) => {
    //find the user in db if needed. This functionality may be omitted if
    // you store everything you'll need in JWT payload.
    return UserModel.getUser(jwtPayload.docID)
      .then(user => {
        return cb(null, user);
      })
      .catch(err => {
        console.error(err);
        return cb(err);
      });
  }
);

passport.use(JWTStrategyHandler);
passport.use(LocalStrategyHandler);

module.exports = passport;
