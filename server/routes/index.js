const express = require("express");
const router = express.Router();
const passport = require("passport");

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

// Protected routes.
router.use(passport.authenticate("jwt", { session: false }));
router.use("/cards", require("./cards"));

module.exports = router;
