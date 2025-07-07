import "../App.css";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const linkclass = ({ isActive }) =>
    isActive
      ? " text-black bg-blue-500 hover:bg-white-900 hover:text-white rounded-md px-3 py-2"
      : " text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ";

  return (
    <>
      <div className="sidebar">
        <div className="buttons">
          <NavLink to="/alltodo" className={linkclass}>
            All Task
          </NavLink>
          <hr />
          <NavLink to="/addtodo" className={linkclass}>
            Add Task
          </NavLink>
          <hr />
          <NavLink to="/todo/done" className={linkclass}>
            Done{" "}
          </NavLink>
          <hr />
          <NavLink to="/todo/undone" className={linkclass}>
            UnDone
          </NavLink>
          <hr />
          <NavLink to="/update/todo/:id" className={linkclass}>
            Update{" "}
          </NavLink>
          <hr />
          <NavLink to="/delete/todo/:id" className={linkclass}>
            Delete{" "}
          </NavLink>
          <hr />
        </div>
      </div>
    </>
  );
};

export default SideBar;
