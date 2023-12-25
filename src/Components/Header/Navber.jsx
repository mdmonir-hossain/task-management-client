import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user, signOutUser, theme, toggle } = useContext(AuthContext);
   const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-[#001C30] text-[#fff] shadow-lg w-full">
        <div className="navbar-start">
          <div className="dropdown bg-[#001C30] text-[#fff]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="bg-[#001C30] text-[#fff] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#f7d8a3]"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#f7d8a3]"
                      : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#f7d8a3]"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SCC Technovision Inc.</a>
        </div>
        <div className="navbar-center hidden lg:flex bg-[#001C30] text-[#fff] ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-[#f7d8a3]"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-[#f7d8a3]"
                    : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-[#f7d8a3]"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user?.displayName}
          <img className="w-5 rounded-full" src={user?.photoURL} />
          {user ? (
            <button onClick={handleLogOut}>LogOut</button>
          ) : (
            <div>
              <Link to="/login">Log in</Link> |<Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
