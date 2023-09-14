import "./UserGrowth.css";
import React from "react";
import { Link } from "react-router-dom";

const UserGrowth = () => {
  return (
    <section className="my-16 lg:my-36">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-10 justify-center lg:justify-between p-6 mx-auto sm:py-12 lg:py-24 ">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold ">
            Loved by Users Everywhere
          </h1>
          <p className="my-8 text-base lg:text-lg sm:mb-12">
            92% of users expressing their love for the Galaxy Meeting
            application, its no wonder our application is experiencing rapid
            growth. The simplicity, enjoyment, and security our application
            offers during meetings are getting positive response.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/register" className="user-growth-btn1">
              Join Us Now
            </Link>
            <Link to="/login" className="user-growth-btn2">
              Login Now
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center p-0 lg:p-6 mt-8 mb-12 lg:mb-0 lg:mt-0">
          <img
            src="https://i.ibb.co/N2wTm98/Galaxy-Meet-Banner.png"
            alt="user growth img"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UserGrowth;
