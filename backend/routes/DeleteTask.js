const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDoModel");

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await ToDo.findByIdAndDelete(id);

    if (!deleteTask) {
      res.json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      success: true,
      ToDo: deleteTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
