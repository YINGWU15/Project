const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const note = await Note.getAllNotes();
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

 
module.exports = router;