import SideBar from "../component/SideBar";
import Tasks from "../component/Tasks";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <div className="main-container">
        <SideBar />

        <div className="Outlet">
          <Outlet />
          <Tasks />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
