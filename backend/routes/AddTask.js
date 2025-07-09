const express = require("express");
const router = express.Router();
const pool = require("../db.js");
const ToDo = require("../models/ToDoModel");

router.post("/addtodo", async (req, res) => {
  try {
    const { description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO todo (description) values ($1)",
      [description]
    );
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
