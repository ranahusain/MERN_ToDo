import Tasks from "../component/Tasks";
import axios from "axios";
const url = "http://localhost:5000/api/addtodo/";
const AddTask = () => {
  const AddTask = async (newTask) => {
    try {
      const res = await axios.post(url, newTask);
      return res.data;
    } catch (error) {
      console.error("error in adding", error);
    }
  };
  return (
    <div className="main-container">
      <Tasks AddTask={AddTask} />
    </div>
  );
};

export default AddTask;
