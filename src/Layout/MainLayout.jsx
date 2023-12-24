import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
