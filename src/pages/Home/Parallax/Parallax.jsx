import Counter from "./Counter";
import React, { useState } from "react";
import parallaxImg from "../../../assets/Parallax/Parallax.png";

const Parallax = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${parallaxImg})`,
      }}
    >
      <div
        className="py-12 lg:py-52 px-12 lg:px-36 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22, 101, 52, .9), rgba(58, 182, 103, .9), rgba(34, 197, 94, .9)",
        }}
      >
        <div>
          <h1 className="text-white text-3xl lg:text-7xl font-bold text-center mb-2">
            Made for people.
          </h1>
          <h1 className="text-white text-3xl lg:text-7xl font-bold text-center mb-4 lg:mb-16">
            Build for productivity.
          </h1>
        </div>
        <div className="flex justify-center items-center text-slate-800">
          <div
            className="bg-white rounded overflow-hidden shadow-lg
                    grid grid-cols-1 lg:grid-cols-3 justify-center items-center text-center
                    p-2 lg:p-8 max-w-md lg:max-w-7xl"
          >
            <div className="p-4 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2">
              <h2 className="flex justify-center  text-2xl lg:text-6xl font-bold uppercase mb-4">
                <Counter endValue={85} />%
              </h2>
              <p className="text-base lg:text-xl font-semibold mb-2 text-slate-500">
                of users say Galaxy Meeting has improved communication
              </p>
            </div>
            <div className="p-4 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2">
              <h2 className="flex justify-center  text-2xl lg:text-6xl font-bold uppercase mb-4">
                <Counter endValue={100} />%
              </h2>
              <p className="text-base lg:text-xl font-semibold mb-2 text-slate-500">
                of Galaxy Meeting customers feel that their meetings are safe
              </p>
            </div>
            <div className="p-4 lg:p-12 ">
              <h2 className="flex justify-center text-2xl lg:text-6xl font-bold uppercase mb-4">
                <Counter endValue={88} />%
              </h2>
              <p className="text-base lg:text-xl font-semibold mb-2 text-slate-500">
                of Galaxy Meeting customers feel more connected to their teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
