const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.get("/signup", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password,
    comment: req.body.comment
  });

  user.save()
      .then(()=>{
        res.status(201).json({textMessage: "Utworzono użytkownia"})
        res.status(500).json({textMessage: "Blad Servera"})
      })
});

module.exports = router;
