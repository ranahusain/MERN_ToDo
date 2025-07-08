// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Spinner from "../component/Spinner";
// import Pagination from "@mui/material/Pagination";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// const Search = () => {
//   const [eachtask, setEachTask] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetcheveryTask = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:5000/api/eachtodo/`);
//       const data = res.data;
//       setEachTask(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 500);
//     }
//   };

//   useEffect(() => {
//     fetcheveryTask();
//   }, []);

//   //================================ UPDATING STATUS ==============================================================//

//   const updateStatus = async (id, newTask) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/update/todo/${id}`,
//         newTask
//       );
//       return res.data;
//     } catch (error) {
//       console.error("Error in updating task", error);
//     }
//   };

//   //=========================================================================================//
//   const [query, setQuery] = useState("");
//   // const filterTask = eachtask.filter((task) => task.task.includes("a"));
//   // console.log("B here");
//   // console.log(filterTask);
//   // console.log("B Gone");

//   return (
//     <>
//       <input
//         type="text"
//         name=""
//         id=""
//         placeholder="Search Here....."
//         className="w-full max-w-md px-4 py-2 m-auto border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         onChange={(e) => {
//           setQuery(e.target.value.toLowerCase());
//         }}
//       />
//       {loading ? (
//         <Spinner loading={loading} />
//       ) : (
//         <div className="overflow-y-auto">
//           {eachtask
//             .filter((task) => task.task.toLowerCase().includes(query))
//             .map((task, index) => (
//               <div key={index} className="task-card">
//                 <div className="seventyperc">
//                   <p className="task-text">{task.task}</p>
//                 </div>
//                 <div className="thirtyper">
//                   {/* ---------------------- ALL LOGIC OF UPDATING --------------------- */}
//                   <input
//                     type="checkbox"
//                     className="task-check"
//                     defaultChecked={task.completed}
//                     onChange={async (e) => {
//                       const completed = e.target.checked;

//                       try {
//                         const result = await updateStatus(task._id, {
//                           completed,
//                         });
//                         if (result.success) {
//                           console.log("Status Change");
//                           toast.success("Task Updated Successfully !");
//                         } else {
//                           toast.error("Error in Updating Task!");
//                         }
//                       } catch (error) {
//                         console.error(error);
//                       }
//                     }}
//                   />

//                   {/* ----------------------------------------------------------------- */}
//                 </div>
//                 <div className="button-update">
//                   <button
//                     className="bg-blue-500 hover:bg-white hover:text-blue-600 text-white font-bold py-0.5 px-2 rounded-4xl w-full focus:outline-none focus:shadow-outline block cursor-pointer"
//                     onClick={() => navigate(`/update/todo/${task._id}`)}
//                   >
//                     &#9997;
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}

//       {/* <div className="pagination">
//         <Pagination
//           // count={Math.ceil(localStorage.getItem("totalvalue") / 8)}
//           count={Math.ceil(document / 6)}
//           sx={{
//             "& .MuiPaginationItem-root": {
//               color: "white",
//             },
//           }}
//           onChange={(e, v) => {
//             setPage(v);
//           }}
//         />
//       </div> */}
//     </>
//   );
// };

// export default Search;

import React, { useState } from "react";

const ToggleInput = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Hello World");
  const [inputValue, setInputValue] = useState(text);

  const handleButtonClick = () => {
    if (isEditing) {
      setText(inputValue); // Save updated value
    }
    setIsEditing(!isEditing); // Toggle state
  };

  return (
    <div className="p-4">
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      ) : (
        <p>{text}</p>
      )}
      <button
        onClick={handleButtonClick}
        className="ml-2 bg-blue-500 text-white px-4 py-1 rounded"
      >
        {isEditing ? "Update" : "Edit"}
      </button>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <ToggleInput />
    </div>
  );
};

export default Search;
