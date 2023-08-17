import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";



const Main = () => {

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  console.log(user);


  return (
    <div>
      <Navbar />
      <div>
        {user ? "welcome" : ""}
      </div>
      <div className="min-h-[calc(100vh-1rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
