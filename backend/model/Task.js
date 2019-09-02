const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskdescription: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("task", TaskSchema);
