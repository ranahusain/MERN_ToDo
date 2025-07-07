import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import Pagination from "@mui/material/Pagination";
import "../App.css";
// const url = "http://localhost:5000/api/alltodo/";
const Delete = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [document, setDocument] = useState();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/alltodo/?page=${page}&limit=8`
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

  const onDeleteClick = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/delete/todo/${id}`
      );
      toast.success("Task Deleted Succesfully !");
      fetchTasks();
    } catch (error) {
      console.error("Error in Deleting task", error);
    }
  };

  //=========================================================================================//

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
          {task.map((task, index) => (
            <div key={index} className="task-card">
              <div className="seventyperc">
                <p className="task-text">{task.task}</p>
              </div>
              <div className="thirtyper">
                {/* ---------------------- LOGIC OF DELETING --------------------- */}
                <button
                  className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-0.5 px-2 rounded-4xl w-full focus:outline-none focus:shadow-outline block cursor-pointer"
                  onClick={() => onDeleteClick(task._id)}
                >
                  X
                </button>
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

export default Delete;
