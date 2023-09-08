import "./Navbar.css";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../../firebase.config";
import { logoutUser } from "../../../features/userSlice";
import SolutionsDropdown from "./SolutionsDropdown";
import { FaBars, FaCaretDown } from "react-icons/fa6";

const auth = getAuth(app);

const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItem = (
    <>
      <Link className="text-red" to="/">
        Home
      </Link>
      <Link to="/features">Feature</Link>
      <SolutionsDropdown />
      <Link to="/community">Community</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/meetup">New Meeting</Link>

      {/* dropdown  */}
      <div className="relative group">
        <div className="flex">
        <button className="group-hover:text-red focus:outline-none">Solutions</button>
        <p className="mt-1">
          <FaCaretDown />{" "}
        </p>
        </div>
        <div className="absolute hidden bg-white sm:w-auto text-gray-700 group-hover:block z-10 mt-2 p-2 space-y-1 rounded-lg shadow-lg">
          <Link to="/blog" className="block px-4 py-2 hover:bg-blue-100">
            Blog
          </Link>
          <Link to="/solutions2" className="block px-4 py-2 hover:bg-blue-100">
            Solution 2
          </Link>
          {/* Add more dropdown items as needed */}
        </div>
      </div>

      {user && <Link to="/dashboard">Dashboard</Link>}
      {user ? (
        <>
          <Link onClick={handelLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="p-3 w-32 rounded-full hover:bg-[#5EC38B] hover:text-white border shadow">
              Login
            </button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div
      className={`${
        isSticky
          ? "z-10 backdrop-opacity-60 backdrop-invert bg-[#1D2E42] text-white sticky top-0"
          : "bg-transparent -top-24"
      } transition duration-300 ease-in-out z-10}
      style={{ transition: "all 0.3s ease" }`}
    >
      <div
        className={`container mx-auto py-2 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <img className="w-16 ms-5" src={Logo} alt="Logo" />
        </div>
        <div>
          <button
            onClick={handleNavToggle}
            className="md:hidden me-4 text-3xl ml-28"
          >
            {isNavOpen ? <FaBars /> : <ImCross />}
          </button>
          <ul className={`md:hidden ${isNavOpen ? "hidden" : "static"}`}>
            <li className="nav-items-responsive font-semibold text-lg">
              {navItem}
            </li>
          </ul>
          <ul className="hidden md:block">
            <li className="nav-items font-semibold text-lg flex justify-center items-center">
              {navItem}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
