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

router.get("/:id", async (req, res, next) => {
  try {
    // NOTE: Fetching all the contacts and then filtering is inneficient.
    // TO-DO: Figure out how to do a query for a specific ID.
    const { data } = await contacts.getContacts();
    const [contact] = data.filter(o => o.id === req.params.id);
    res.send(contact);
  } catch (e) {
    console.error(e);
    next(e);
    res.status(500).send(e);
  }
});

module.exports = router;
