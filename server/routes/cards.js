const express = require("express");
const api = express.Router();
const CardsModel = require("../models/cards.model");

api.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const result = await CardsModel.findAll(req.user.docID, filters);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

api.get("/search/:term", async (req, res) => {
  try {
    const term = req.params.term;
    const result = await CardsModel.searchByTerm(req.user.docID, term);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = api;
