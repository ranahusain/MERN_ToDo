import SideBar from "../component/SideBar";
import Tasks from "../component/Tasks";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Search from "../component/Search";
const MainLayout = () => {
  return (
    <>
      {/* <Search /> */}
      <ToastContainer theme="colored" />
      <div className="main-container">
        <SideBar />
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
