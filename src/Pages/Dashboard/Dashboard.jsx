import {  Outlet } from "react-router-dom";
import UserDashboard from "./UserDashboard";


const Dashboard = () => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row">
      <UserDashboard></UserDashboard>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
