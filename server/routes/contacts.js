const express = require("express");
const router = express.Router();
const contacts = require("../models/contacts");

router.get("/", async (req, res, next) => {
  try {
    const rows = await contacts.getContacts();
    res.send(rows);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
