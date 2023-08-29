import "./Navbar.css";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
// import { FaBars, FaXmark } from "react-icons/fa6";
import { ImMenu3 } from 'react-icons/im';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../../firebase.config";
import { logoutUser } from "../../../features/userSlice";
import SolutionsDropdown from "./SolutionsDropdown";


const auth = getAuth(app);

const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  // Stricky Navbar
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

      <Link to="/online-meeting">New Meeting</Link>
      {user ? (
        <>
          <Link onClick={handelLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="p-3 w-[110px] rounded-full hover:bg-[#5EC38B] hover:text-white border shadow">
              Login
            </button>
          </Link>
        </>
      )}
    </>
  );

  // className={`${
  //   isSticky ? 'bg-blue-500' : 'bg-transparent'
  // } fixed w-full top-0 transition duration-300 ease-in-out z-10`}
  // ${isSticky ? '-translate-y-16' : 'translate-y-0'}

  return (
    <div
      className={`${
        isSticky
          ? " backdrop-opacity-60 backdrop-invert bg-[#6EE7B7]  sticky top-0"
          : "bg-transparent -top-24"
      } transition duration-300 ease-in-out z-10`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div
        className={`container mx-auto py-2 flex items-center justify-between`}
      >
        <div>
          <img className="w-16" src={Logo} alt="Logo" />
        </div>
        <div>
          <button onClick={handleNavToggle} className="pe-3 md:hidden text-3xl">
            {isNavOpen ? <ImMenu3 /> : <AiFillCloseCircle />}
          </button>
          <ul className="hidden md:block">
            <li className="nav-items font-semibold text-lg">{navItem}</li>
          </ul>
          <ul className={`md:hidden ${isNavOpen ? "hidden" : "static"}`}>
            <li className="nav-items-responsive font-semibold text-lg">
              {navItem}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
