import React, { useState } from 'react'
import './DropDown.css'
const DropDwonMenu = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);

    const handleSubMenuToggle = () => {
      setShowSubmenu(!showSubmenu);
    };
  
  return (
    <nav className="navbar flex justify-between">
    <div className="logo">Logo</div>
    <ul className="menu flex gap-2">
      <li className="menu-item">
        <a href="/">Home</a>
      </li>
      <li className="menu-item">
        <a href="/about">About</a>
      </li>
      <li
        className={`menu-item ${showSubmenu ? 'submenu-active' : ''}`}
        onMouseEnter={handleSubMenuToggle}
        onMouseLeave={handleSubMenuToggle}
      >
        <a href="/services">Services</a>
        {showSubmenu && (
          <ul className="submenu">
            <li className="submenu-item">
              <a href="/service1">Service 1</a>
            </li>
            <li className="submenu-item">
              <a href="/service2">Service 2</a>
            </li>
            {/* Add more submenu items as needed */}
          </ul>
        )}
      </li>
      <li className="menu-item">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="menu-item">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default DropDwonMenu