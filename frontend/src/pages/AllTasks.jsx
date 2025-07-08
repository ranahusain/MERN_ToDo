import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import "../App.css";
const AllTasks = () => {
  const [task, setTask] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [document, setDocument] = useState();

  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/alltodo/?page=${page}&limit=6&query=${query}`
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
  }, [page, query]);

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
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Here....."
        className="w-full max-w-md px-4 py-2 mt-5 mx-auto border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
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
              <div className="button-update">
                <button
                  className="bg-blue-500 hover:bg-white hover:text-blue-600 text-white font-bold py-0.5 px-2 rounded-4xl w-full focus:outline-none focus:shadow-outline block cursor-pointer"
                  onClick={() => navigate(`/update/todo/${task._id}`)}
                >
                  &#9997;
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <Pagination
          // count={Math.ceil(localStorage.getItem("totalvalue") / 8)}
          count={Math.ceil(document / 6)}
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

export default AllTasks;
