const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDoModel");

router.post("/addtodo", async (req, res) => {
  try {
    const { task, completed } = req.body;
    const newTask = new ToDo({ task, completed });
    await newTask.save();
    res.status(200).json({
      success: true,
      ToDo: newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
