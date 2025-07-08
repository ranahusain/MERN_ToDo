const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const AddTask = require("./routes/AddTask");
const AllTask = require("./routes/AllTask");
const DeleteTask = require("./routes/DeleteTask");
const DoneTask = require("./routes/DoneTaks");
const UnDone = require("./routes/UnDoneTaks");
const UpdateTask = require("./routes/UpdateTask");
// const EachTodo = require("./routes/EachTodo");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api", AddTask);
app.use("/api", AllTask);
app.use("/api", DeleteTask);
app.use("/api", DoneTask);
app.use("/api", UnDone);
app.use("/api", UpdateTask);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
