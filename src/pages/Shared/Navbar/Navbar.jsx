import React from "react";

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
    <div>
      <h1>Navbar.</h1>
    </div>
  );
};

export default Navbar;
