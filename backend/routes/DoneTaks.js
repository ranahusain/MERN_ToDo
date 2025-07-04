const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDoModel");

router.get("/todos/done", async (req, res) => {
  try {
    const ToDos = await ToDo.find({ completed: true });
    res.status(200).json(ToDos);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
