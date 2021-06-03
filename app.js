const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

const usersRoutes = require('./api/routes/users')

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sn94c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Polaczono z DB");
});


app.use('/users', usersRoutes)


module.exports = app;
