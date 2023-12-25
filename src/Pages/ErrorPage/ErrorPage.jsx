import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/LrzvRqR/404.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn bg-red-600 text-white">
              <Link to="/">Go to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
