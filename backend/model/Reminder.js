const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReminderSchema = new Schema({
  remindername: {
    type: String,
    required: true
  },
  reminderTime: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("reminder", ReminderSchema);
