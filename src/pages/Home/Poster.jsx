import React from "react";
import ButtonArrow from "../../components/ButtonArrow";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto border-2 bg-slate-400 
      py-10 px-12 rounded-md  bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
        <h2 className="text-center md:text-left font-semibold text-2xl  lg:text-3xl text-white">
          Ensure your Business Continuity and Service with Galaxy Meet
        </h2>
        <ButtonArrow>
          <Link to='/register'>
            Create an account
          </Link>
        </ButtonArrow>
      </div>
    </div>
  );
};

export default Poster;
