import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../App.css";
const url = "http://localhost:5000/api/alltodo/";
const AllTasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data);
        setTask(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);
  return (
    <>
      <div>
        {task.map((task, index) => (
          <div key={index} className="task-card">
            <p className="task-text">{task.task}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTasks;
