const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getAllNotes(req.body);
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/read', async (req, res) => {
    try {
      let note = await Note.read(req.body);
      res.send({...note})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNote(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })


  .delete('/delete', async (req, res) => {
    try {
      User.deleteNote(req.body);
      res.send({success: "Happy Every Day!"})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
 
module.exports = router;