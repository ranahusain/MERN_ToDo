import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import Pagination from "@mui/material/Pagination";
import "../App.css";
// const url = "http://localhost:5000/api/alltodo/";
const DoneTask = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [document, setDocument] = useState();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/todo/done/?page=${page}&limit=8`
      );
      const data = res.data;
      console.log(data);
      console.log("Total Value : ", data.totalValue);
      setTask(data.data);
      setDocument(data.totalValue);
      // localStorage.setItem("totalvalue", data.totalValue);
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
  }, [page]);

  //================================ UPDATING STATUS ==============================================================//

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

  //=========================================================================================//

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
          {Array.isArray(task) &&
            task.map((task, index) => (
              <div key={index} className="task-card">
                <div className="seventyperc">
                  <p className="task-text">{task.task}</p>
                </div>
                <div className="thirtyper">
                  {/* ---------------------- ALL LOGIC OF UPDATING --------------------- */}
                  <input
                    type="checkbox"
                    className="task-check"
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
            ))}
        </div>
      )}

      <div className="pagination">
        <Pagination
          // count={Math.ceil(localStorage.getItem("totalvalue") / 8)}
          count={Math.ceil(document / 8)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
          onChange={(e, v) => {
            setPage(v);
          }}
        />
      </div>
    </>
  );
};

export default DoneTask;
