import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContractUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Addtask from "../Pages/Addtask/Addtask";
import TaskManager from "../Pages/TaskManager/TaskManager";
import ToDo from "../Pages/Dashboard/ToDo";
import Ongoing from "../Pages/Dashboard/Ongoing";
import Completed from "../Pages/Dashboard/Completed";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contactus",
        element: <ContractUs></ContractUs>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "taskadd",
        element: (
          <PrivateRoute>
            <Addtask></Addtask>
          </PrivateRoute>
        ),
      },
      {
        path: "taskmanager",
        element: (
          <PrivateRoute>
            <TaskManager></TaskManager>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addtask"),
      },
      {
        path: "todo",
        element: (
          <PrivateRoute>
            <ToDo></ToDo>
          </PrivateRoute>
        )
      },
      {
        path: "ongoing",
        element: (
          <PrivateRoute>
            <Ongoing></Ongoing>
          </PrivateRoute>
        )
      },
      {
        path: "completed",
        element: (
          <PrivateRoute>
            <Completed></Completed>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addtask"),
      },
    ],
  },
]);

export default Routes;
