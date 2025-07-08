import "../App.css";
import { toast } from "react-toastify";
import { useState } from "react";

const Tasks = ({ AddTask }) => {
  const [task, setTask] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const newTask = { task };

    try {
      const result = await AddTask(newTask);
      console.log("response from add task", result);
      if (result.success) {
        toast.success("Task Added Successfully !");
        setTask("");
      } else {
        toast.error("Error in Adding Task !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="tasks">
        <form className="task-input" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Enter task..."
            id="inputTask"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <button>+</button>
        </form>
      </div>
    </>
  );
};

export default Tasks;
