import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import Pagination from "@mui/material/Pagination";
import "../App.css";
// const url = "http://localhost:5000/api/alltodo/";
const AllTasks = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [document, setDocument] = useState();

  const fetchTasks = async () => {
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
      }, 1000);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page]);

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
                <button className="task-button">Hello</button>
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
              borderColor: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "#2568e5",
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
