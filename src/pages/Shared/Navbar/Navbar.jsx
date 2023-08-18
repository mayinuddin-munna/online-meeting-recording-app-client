import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar.</h1>
      <Link to='/login'><button>Login</button></Link>
      <br />
      <Link to='/online-meeting'>Online Meeting</Link>
      <br />
      <Link to='/solutions'>Solutions</Link>
    </div>
  );
};

export default Navbar;
