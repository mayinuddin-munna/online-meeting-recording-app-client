import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const isLoading = useSelector((state) => state.data.user.isLoading);


  return (
    <div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>  <Navbar />
          <div className="min-h-[calc(100vh-1rem)]">
            <Outlet />
          </div>
          <Footer />
        </>
      )
      }

    </div>
  );
};

export default Main;
