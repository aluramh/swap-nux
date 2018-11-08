const express = require("express");
const api = express.Router();
const Cards = require('../models/Cards')


api.get('/',
  async (req, res) => {
    try {
      const filters = req.query
      const result = await Cards.findAll(req.user.docID, filters)
      res.json(result)
    } catch (error) {
      res.send(error)
    }
  })

api.get('/search/:term',
  async (req, res) => {
    try {
      const term = req.params.term
      const result = await Cards.searchByTerm(req.user.docID, term)
      res.json(result)
    } catch (error) {
      res.send(error)
    }

  }
)

module.exports = api
