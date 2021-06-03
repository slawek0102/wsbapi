const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')


const User = require('../models/users')

router.get("/signup", (req, res, next) => {
  console.log("request on /signup", req.body);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password

  })

  return res.status(200).json({wiadomosc: user})

  next()


});



module.exports = router;
