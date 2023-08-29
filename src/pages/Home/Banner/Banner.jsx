import React from "react";
import HomeIcon from "../../../assets/home-icon.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto flex md:items-center justify-around flex-col md:flex-row py-10 px-8 lg:px-0">
        <div className="flex-1 lg:pl-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold inline text-black">
            Galaxy meet <br /> without a <br /> Hitch{" "}
            <span>
              <img
                src={HomeIcon}
                alt="home-icon"
                className="inline w-10 md:w-12"
              />
            </span>
          </h1>
          <p className="my-8 md:my-12">
            Distance does not matter. It is the meeting <br /> that matter the
            most.
          </p>
          <div className="flex flex-row md:flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="insert your meeting link"
              className="border-2 px-4 py-2 rounded-xl focus:ring focus:ring-blue-200"
            />
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-xl rounded-xl transition">
              Start Meeting
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/N2wTm98/Galaxy-Meet-Banner.png" alt="galaxy-meet banner" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
