const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const user = await User.getAllUsers();
      res.send(user);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports = router;