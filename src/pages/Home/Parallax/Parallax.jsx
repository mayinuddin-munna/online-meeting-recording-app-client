import React from "react";
import parallaxImg from "../../../assets/Parallax/Parallux.png";

const Parallax = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${parallaxImg})`,
      }}
    >
      <div
        className="py-12 lg:py-72 px-12 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to right,  rgba(16, 185, 129, 0.7), rgba(6 ,182, 212, 0.7), rgba(45, 212, 191, 0.7)",
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
            <div className="p-4 lg:p-12 sm:border-b-2 lg:border-b-0 lg:border-r-2">
              <h2 className="text-2xl lg:text-6xl font-bold uppercase mb-4">
                85%
              </h2>
              <p className="text-base lg:text-xl font-semibold mb-2 text-slate-500">
                of users say Galaxy Meeting has improved communication
              </p>
            </div>
            <div className="p-4 lg:p-12 sm:border-b-2 lg:border-b-0 lg:border-r-2">
              <h2 className="text-2xl lg:text-6xl font-bold uppercase mb-4">
                100%
              </h2>
              <p className="text-base lg:text-xl font-semibold mb-2 text-slate-500">
                of Galaxy Meeting customers feel that their meetings are safe
              </p>
            </div>
            <div className="p-4 lg:p-12 ">
              <h2 className="text-2xl lg:text-6xl font-bold uppercase mb-4">
                88%
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
