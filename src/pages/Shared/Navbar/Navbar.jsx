<<<<<<< HEAD
import React from "react";

=======
import React, { useState } from "react";
import Logo from "../../../assets/Logo.png"
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import './Navbar.css'
>>>>>>> 0084d01efb25f1635fd531d9564d9bdc8549aaf1
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItem = <>
    <Link className="text-red" to="/">Home</Link>
    <Link to="/features">Feature</Link>
    <Link to="/community">Community</Link>
    <Link to="/new-metting">New Metting</Link>
    <Link to="/login">Login</Link>
  </>

  return (
<<<<<<< HEAD
    <div>
      <h1>Navbar.</h1>
=======
    <div className="container mx-auto py-2 flex items-center justify-between">
      <div>
        <img className="w-16" src={Logo} alt="Logo" />
      </div>
      <div>
        <button onClick={handleNavToggle} className="md:hidden text-3xl">
          {
            isNavOpen ? <FaBars></FaBars>  : <FaXmark></FaXmark>
          }

        </button>
        <ul className="hidden md:block">
          <li className="nav-items font-semibold text-lg">
            {navItem}
          </li>
        </ul>
        <ul className={`md:hidden ${isNavOpen ? 'hidden' : 'static'}`}>
          <li className="nav-items-responsive font-semibold text-lg">
            {navItem}
          </li>
        </ul>
      </div>
>>>>>>> 0084d01efb25f1635fd531d9564d9bdc8549aaf1
    </div>
  );
};

export default Navbar;
