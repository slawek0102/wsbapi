const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sn94c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Jest polaczenie");
    }
  }
);

module.exports = app;
