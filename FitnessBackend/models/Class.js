// models/Class.js
const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  coach: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Class", ClassSchema);

