const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  password: {
    type: String,
    required: true,
  },
  comments: [{ body: String, date: Date, required: false }],
  lastLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
