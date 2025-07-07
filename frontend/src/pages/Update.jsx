import Tasks from "../component/Tasks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Update = () => {
  const { id } = useParams();
  console.log(id);

  const AddTask = async (newTask) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/update/todo/${id}`,
        newTask
      );
      return res.data;
    } catch (error) {
      console.error("error in adding", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <Tasks AddTask={AddTask} />
      </div>
    </>
  );
};

export default Update;
