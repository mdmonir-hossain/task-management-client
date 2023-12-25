import Lottie from "lottie-react";
import todo from "../../assets/todo.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#f7d8a3] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/mTM8Mm3/task-manager-bg.png"
            className="lg:w-1/2"
          />
          <div>
            <h1 className="text-5xl font-bold lg:text-left text-center ">
              Task Management Platform
            </h1>
            <p className="py-6">
              Empower Your Productivity: Seamless Task Management Platform for
              Effortless Progress!
            </p>
            <Link to="/login">
              <button className="btn bg-[#001C30] text-white hover:text-[#001C30] lg:w-1/3 w-full">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
