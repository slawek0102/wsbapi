const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    require: true,
    minLength: 5,
  },
  author: {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    born: { type: Date, required: false },
    info: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
