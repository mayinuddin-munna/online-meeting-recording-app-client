import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsBell, BsGear, BsHeart, BsPerson,BsStar } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

const UserDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        {/* Left side icon for displaying sidebar */}
        <FaBars
          className="text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        />
        <div className="flex items-center space-x-6">
          <BsBell />
          <img
            src="user-profile-image.jpg"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-800">User Name</span>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`bg-gray-200 w-64 h-[700px] flex justify-between flex-col ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4 ms-8 gap-y-4">
          {/* Sidebar Navigation */}
          <h2 className="text-2xl mt-8">User Profile</h2>
          
          <ul className="space-y-7 mt-8">
              <li className="flex gap-3" >
              <BsPerson />
                <Link to="/user-info">
                   User Info
                </Link>
              </li>
              <li className="flex gap-3" >
              <BsHeart />
                <Link to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="flex gap-3" >
              <BsStar/> 
                <Link to="/watchlist">
                 Watchlist
                </Link>
              </li>
              <li className="flex gap-3" >
              <BsGear /> 
                <Link to="/settings">
                 Settings
                </Link>
              </li>
              <li className="flex gap-3" >
              <BsBell />
                <Link to="/notifications">
                  Notifications
                </Link>
              </li>
            </ul>
          
          {/* Logout button */}
        </div>
        <div className=" ms-12 p-5 flex gap-3">
        <BiLogOutCircle className="mt-1 text-red-500" />
          <Link to="/logout" className=" text-red-500">
           Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
       <main className="p-4">
        <UserInfo/>
      </main>
    </div>
  );
};

export default UserDashboard;
