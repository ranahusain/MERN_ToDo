import "./App.css";
import SideBar from "./component/SideBar";
import Tasks from "./component/Tasks";

function App() {
  return (
    <>
      <div class="main-container">
        <SideBar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
