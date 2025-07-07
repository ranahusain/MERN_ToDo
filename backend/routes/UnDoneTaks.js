// const express = require("express");
// const router = express.Router();

// const ToDo = require("../models/ToDoModel");

// router.get("/todo/undone", async (req, res) => {
//   try {
//     const ToDos = await ToDo.find({ completed: false });
//     res.status(200).json(ToDos);
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDoModel");

router.get("/todo/undone", async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;
  try {
    const totalValue = await ToDo.countDocuments({ completed: false });
    const ToDos = await ToDo.find({ completed: false }).skip(skip).limit(limit);

    return res.send({ totalValue, data: ToDos });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
