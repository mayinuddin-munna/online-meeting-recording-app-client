import "./Navbar.css";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../../firebase.config";
import { logoutUser } from "../../../features/userSlice";
import { FaBars } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const auth = getAuth(app);

const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Logo);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
      setLogoSrc("https://i.ibb.co/821XCP8/galaxy-meeting-LIGHT.png");
    } else {
      setIsSticky(false);
      setLogoSrc(Logo);
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

  const dropdownItemStyle = {
    color: isSticky ? "black" : "",
  };

  const navItem = (
    <>
      <Link to="/">Home</Link>
      <Link to="/features">Feature</Link>
      <Link to='/user-dashboard'>User Dashboard</Link>
      <Link to='/user-info'>User Info</Link>

      <div className="relative inline-block group pr-3">
        <div className="flex">
          <button className="rounded-md group-hover:text-red focus:outline-none">
            Explore
          </button>
          <FaCaretDown className="mt-1" />{" "}
        </div>

        <div
          className="absolute hidden bg-white sm:w-auto group-hover:block z-20 me-5 space-y-1 rounded-lg shadow-lg"
          style={dropdownItemStyle}
        >
          <Link to="/solutions" className="block px-4 py-2">
            Solution
          </Link>
          <Link to="/community" className="block px-4 py-2">
            Community
          </Link>
          <Link to="/about-us" className="block px-4 py-2">
            About Us
          </Link>
        </div>
      </div>
      {user && <Link to="/dashboard">Dashboard</Link>}
      <Link to="/meetup">
        <button className="w-48 p-2 rounded-full border-2 text-green-500 border-green-500 hover:bg-[#5EC38B] hover:text-white shadow">
          New Meeting
        </button>
      </Link>
      {user ? (
        <Link onClick={handelLogout}>Logout</Link>
      ) : (
        <Link to="/login">
          <button className="p-2 w-32 rounded-full bg-[#5EC38B] text-white border shadow">
            Login
          </button>
        </Link>
      )}
    </>
  );

  return (
    <div
      className={`${
        isSticky
          ? "z-10 backdrop-opacity-60 backdrop-invert bg-[#1D2E42] text-white sticky top-0"
          : "bg-transparent -top-24"
      } transition duration-300 ease-in-out z-10`}
    >
      <div
        className={`container mx-auto py-2 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img className="w-16 ms-5 z-20" src={logoSrc} alt="Logo" />
          </Link>
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
