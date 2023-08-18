import React from "react";
import ButtonArrow from "../../components/ButtonArrow";

const Poster = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center lg:w-2/3 mx-auto border-2 bg-slate-400 py-8 px-8 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-300">
        <h2 className="text-center md:text-left text-white font-semibold text-2xl">
          Ensure your Business <br />
          Continuity and Service Level
        </h2>
        <ButtonArrow>Discover More</ButtonArrow>
      </div>
    </div>
  );
};

export default Poster;
