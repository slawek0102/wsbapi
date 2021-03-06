const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/check-auth");
const Books = require("../models/books");

// Get All Books
router.get("/all", checkAuth,(req, res) => {
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
router.delete("/:bookId", checkAuth, (req, res, next) => {
  const { bookId } = req.params;

  Books.findByIdAndDelete(bookId)
    .then((result) => {
      res.status(200).json({
        message: `Usunieto ksiązkę o Id ${bookId} pod tytulem ${result.title}`,
      });
    })
    .catch((err) =>
      res.status(500).json({ message: "Internal Server Error", error: err })
    );
});

// Update book
router.put("/:bookId", checkAuth, (req, res, next) => {
  const { bookId } = req.params;

  Books.findByIdAndUpdate(bookId, {
    title: req.body.title,
    author: {
      firstName: req.body.author.firstName,
      lastName: req.body.author.lastName,
    },
    subject: req.body.subject,
  })
    .then((result) => {
      res.status(200).json({
        message: `Ksiązka o nr ${bookId} zostala zmieniona`,
        recordBeforeChange: result,
        recordAfterChange: req.body,
      });
    })
    .catch((err) => res.status(500).json({ message: "Server Error" }));
});

// Display all books with a given subject
// for example "Znajdz wszyskie ksiazki z tematyki/subject "Natura"
router.get("/subject/:subject", (req, res, next) => {
  const { subject } = req.params;

  Books.find({ subject: subject })
    .then((result) => {
      res.status(200).json({
        message: result,
      });
    })
    .catch((err) => res.status(500).json({ message: "Server Error" }));
});

// Display books with a given authors Name. Provide with info with record found.
// Znajdz wszystkie ksązki z lastName "Kowalski"
router.get("/author/:lName", (req, res, next) => {
  const { lName } = req.params;

  Books.find({ "author.lastName": lName })
    .then((result) => {
      if (!result.length) {
        res.status(200).json({
          message: `Nie znaleziono autora o nazwisku  ${lName}`,
        });
      }
      // Jesli pominę else otrzymuję bląd " Cannot set headers after they are sent to the client". Dlatego kozystam z else ponizej
      else {
        res.status(200).json({
          message: result,
          recordsFound: result.length.toString(),
        });
      }
    })
    .catch((err) => res.status(500).json({ message: "Server Error" }));
});

module.exports = router;
