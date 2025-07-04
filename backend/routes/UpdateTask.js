const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDoModel");

router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updateTask = await ToDo.findByIdAndUpdate(id, { task, completed });

    if (!updateTask) {
      res.json({
        message: "Task Not Found",
      });
    }
    res.status(200).json({
      success: true,
      ToDo: updateTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
