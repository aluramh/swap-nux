const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contacts"));
router.use("/user", require("./user"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

module.exports = router;
