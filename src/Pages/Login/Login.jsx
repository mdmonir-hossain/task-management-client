import { Helmet } from "react-helmet";

import { signInWithPopup } from "firebase/auth";

import { motion } from "framer-motion";

import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { auth, googleProvider, googleUserSignin, signOutUser, signInUser } =
    useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleUserSingin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUserSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        if (result.user) {
          toast("User Login successfully");
        }
      })
      .catch((error) => {
        setError(error.message);
        if (error) {
          toast("Email or Password does not match.");
        }
      });
  };
  return (
    <div>
      <ToastContainer></ToastContainer>

      <div className=" bg-[#F7D8A3] min-h-screen grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <Helmet>
          <title> Log in </title>
        </Helmet>
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 border-2 border-[#001C30] justify-center items-center rounded-lg "
        >
          <h1 className="text-3xl text-center">Log In</h1>
          <form
            onSubmit={handleUserSignin}
            className="flex max-w-md flex-col gap-4"
          >
            <div className="flex flex-col justify-center items-center  ">
              <div>
                <div className="mb-2 block">
                  <label htmlFor="email1" value="Your email" />
                </div>

                <input
                  id="email1"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="password1" value="Your password" />
                </div>
                <input
                  id="password1"
                  type="password"
                  name="password"
                  className="input input-bordered w-full "
                  required
                />
              </div>
            </div>
            <button type="btn submit bg-[#001C30]">Log in</button>
          </form>
          <hr className="w-3/4 mt-2" />
          <div className="flex gap-4 mt-2">
            <button
              className="btn w-1/3"
              color="gray"
              onClick={handleGoogleUserSingin}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button className="btn w-1/3" color="gray">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 mt-2">
            <h1>Don't have Account?</h1>
            <Link to="/SignUp" className="text-sky-500">
              Sign UP
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center rounded-lg"
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
        >
          <img src="https://i.ibb.co/wNG6Rx4/login.png" />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
