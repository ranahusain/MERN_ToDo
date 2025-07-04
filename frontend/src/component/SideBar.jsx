import "../App.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="buttons">
          <Link to="/alltodo">All Task</Link>
          <hr />
          <Link to="/addtodo">Add Task</Link>
          <hr />
          <Link to="/todo/done">Done </Link>
          <hr />
          <Link to="/todo/undone">UnDone</Link>
          <hr />
          <Link to="/update/todo/:id">Update </Link>
          <hr />
          <Link to="/delete/todo/:id">Delete </Link>
          <hr />
        </div>
      </div>
    </>
  );
};

export default SideBar;
