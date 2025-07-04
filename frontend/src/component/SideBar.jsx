import "../App.css";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="buttons">
          <NavLink to="/alltodo">All Task</NavLink>
          <hr />
          <NavLink to="/addtodo">Add Task</NavLink>
          <hr />
          <NavLink to="/todos/done">Done Task</NavLink>
          <hr />
          <NavLink to="/todos/undone">UnDone Task</NavLink>
          <hr />
          <NavLink to="/update/todo/:id">Update Task</NavLink>
          <hr />
          <NavLink to="/deletetodo/:id">Delete Task</NavLink>
          <hr />
        </div>
      </div>
    </>
  );
};

export default SideBar;
