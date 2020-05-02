const mongoose = require("mongoose");
// todoSchema structure of the document
const todoSchema = new mongoose.Schema(
  {
    todo: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Todo", todoSchema);
