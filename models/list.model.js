const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
    },

    genre: {
      type: String,
    },

    content: {
      type: Array,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
