require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("./config/passport");

// Create express instance
const app = express();

app.locals.string1 = "This is inside locals";

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Require and use the API routes
app.use(passport.initialize());
app.use(require("./config/allowedOrigins"));
app.use(require("./routes"));

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app
};
