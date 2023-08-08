import React from "react";
import Login from "../../Register/Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar.</h1>
      <Link to='/login'><button>Login</button></Link>

    </div>
  );
};

export default Navbar;
