const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Books = require("../models/books");

// Get All Books
router.get("/all", (req, res) => {
  Books.find().then((result) => {
    res.status(200).json({
      allBooks: result,
    });
  });
});

// New Book
router.post("/add", (req, res, next) => {
  const book = new Books({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: {
      firstName: req.body.author.firstName,
      lastName: req.body.author.lastName,
    },
    subject: req.body.subject,
  });

  book
    .save()
    .then((result) => {
      res.status(201).json({
        message: `Book ${req.body.title} was added to library`,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

// Delete Book
router.delete("/:bookId", (req, res, next) => {

  const {bookId} = req.params

  Books.findByIdAndDelete(bookId)
    .then((result) => {
      res.status(200).json({
        message: `Usunieto ksiązkę o Id ${bookId} pod tytulem ${result.title}`,
      });
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error", error: err }));
});

module.exports = router;
