import Tasks from "../component/Tasks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import { toast } from "react-toastify";

import axios from "axios";
const Update = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState("");
  const { id } = useParams();
  console.log(id);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/todo/${id}`);
      const data = res.data;
      console.log(data);
      setTask(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateStatus = async (id, newTask) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/update/todo/${id}`,
        newTask
      );
      return res.data;
    } catch (error) {
      console.error("Error in updating task", error);
    }
  };

  //===========================================
  const AddTask = async (newTask) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/update/todo/${id}`,
        newTask
      );
      fetchTasks();
      return res.data;
    } catch (error) {
      console.error("error in updating", error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
          <h1>Update Task</h1>

          <div className="task-card">
            <div className="seventyperc">
              <p className="task-text">{task.task}</p>
            </div>
            <div className="thirtyper">
              {/* ---------------------- ALL LOGIC OF UPDATING --------------------- */}
              <input
                type="checkbox"
                className="task-check"
                defaultChecked={task.completed}
                onChange={async (e) => {
                  const completed = e.target.checked;

                  try {
                    const result = await updateStatus(task._id, {
                      completed,
                    });
                    if (result.success) {
                      console.log("Status Change");
                      toast.success("Task Updated Successfully !");
                    } else {
                      toast.error("Error in Updating Task!");
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />

              {/* ----------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      )}

      <Tasks AddTask={AddTask} />
    </>
  );
};

export default Update;
