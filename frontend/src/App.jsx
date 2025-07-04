import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
import Delete from "./pages/Delete";
import Done from "./pages/DoneTask";
import UnDone from "./pages/UnDone";
import Update from "./pages/Update";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/addtodo" element={<AddTask />} />
        <Route path="/alltodo" element={<AllTasks />} />
        <Route path="/delete/todo/:id" element={<Delete />} />
        <Route path="/update/todo/:id" element={<Update />} />
        <Route path="/todo/done" element={<Done />} />
        <Route path="/todo/undone" element={<UnDone />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
