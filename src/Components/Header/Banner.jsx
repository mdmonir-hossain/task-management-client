import Lottie from "lottie-react";
import todo from "../../assets/todo.json";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#f7d8a3]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={todo}></Lottie>
          <div>
            <h1 className="text-5xl font-bold">Task Management Platform</h1>
            <p className="py-6">
              Empower Your Productivity: Seamless Task Management Platform for
              Effortless Progress!
            </p>
            <button className="btn bg-[#001C30] text-white hover:text-[#001C30]">
              Let’s Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
