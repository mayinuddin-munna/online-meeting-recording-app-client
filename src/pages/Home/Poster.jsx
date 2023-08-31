import React from "react";
import ButtonArrow from "../../components/ButtonArrow";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center lg:w-10/12 mx-auto border-2 bg-slate-400 
      py-10 px-12 rounded-md  bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
        <h2 className="text-center md:text-left text-white font-semibold text-2xl">
          Ensure your Business Continuity and Service Level
        </h2>
        <ButtonArrow>
          <Link>
            Create an account
          </Link>
        </ButtonArrow>
      </div>
    </div>
  );
};

export default Poster;
