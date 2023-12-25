import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const UserDashboard = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="bg-[#001C30] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
        <div className="flex justify-between">
          <h1 className=" text-white text-xl ">User DashBoard</h1>

          <Link to="/" className=" text-white text-xl ">
            Home
          </Link>
        </div>
        <hr />
        <Link to="/dashboard/taskadd">Task Add</Link>
        <Link to="/dashboard/taskmanager">Task Manager</Link>
        <Link to="/dashboard/todo">To-Do</Link>
        <Link to="/dashboard/ongoing">Ongoing task</Link>
        <Link to="/dashboard/completed">Completed Task</Link>
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
