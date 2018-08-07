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
    const {
      data: [contact]
    } = await contacts.getContacts({
      id: req.params.id
    });

    if (contact) {
      return res.send(contact);
    } else {
      return res.status(404).end();
    }
  } catch (e) {
    console.error(e);
    next(e);
    res.status(500).send(e);
  }
});

module.exports = router;
