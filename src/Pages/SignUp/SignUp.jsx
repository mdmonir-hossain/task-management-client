import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { signupUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [UserSuccess, setUserSuccess] = useState();

  const handleUserSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, photo, name);
    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast(
        "Minimum six characters, at least one capital letter and one special character"
      );
      return;
    }
    setError("");
    signupUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUserSuccess(result.user);
        if (result.user) {
          toast("User Create successfully");
        }
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile updated successfully"))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    if (error) {
      toast(error);
    }
  };

  return (
    <div className="bg-[#F7D8A3] min-h-screen">
      <ToastContainer></ToastContainer>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 justify-center items-center"
      >
        <Helmet>
          <title> Sign Up</title>
        </Helmet>

        <div className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center  rounded-lg ">
          <h1 className="text-3xl text-center">Sign Up</h1>
          <form
            onSubmit={handleUserSignUp}
            className="flex max-w-md flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <label htmlFor="name" value="Your name" />
              </div>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="email1" value="Your email" />
              </div>
              <input
                id="email1"
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full "
                name="email"
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
            <div>
              <div className="mb-2 block">
                <label htmlFor="photo" value="Your Photo" />
              </div>
              <input
                name="photo"
                id="photo"
                type="text"
                placeholder="Your photo URL"
                className="input input-bordered w-full "
                required
              />
            </div>
            <button type="submit" className="btn bg-[#001C30] text-white ">
              Sign Up
            </button>
          </form>
          <hr className="w-3/4 mt-2" />
          <div className="flex gap-4 mt-2">
            <h1>Alraedy Account?</h1>
            <Link to="/login" className="text-sky-500 ">
              Sign in
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="flex-1"
              >
                  <img src="https://i.ibb.co/PmJRGHZ/sign-up.png" className="w-3/4"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
