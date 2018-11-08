const express = require("express");
const router = express.Router();
const passport = require('passport')


router.use('/auth', require('./auth'))
router.use('/cards', passport.authenticate('jwt', { session: false }), require('./cards'))

module.exports = router