const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

router.post("/signup", (req, res, next) => {
  console.log("request on /signup", req);
  next();
});


module.exports = router;