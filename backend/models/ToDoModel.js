const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true,
    maxlength: 50,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = model("ToDo", TaskSchema);

module.exports = TaskModel;
