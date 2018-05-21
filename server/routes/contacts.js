var express = require('express');
var router = express.Router();

var ContactsController = require('../controllers/contacts')


router.get ('/contacts', ContactsController.getAll)

module.exports = router