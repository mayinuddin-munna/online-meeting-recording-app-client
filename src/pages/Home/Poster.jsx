import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../../components/ButtonArrow";

const Poster = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto py-10 px-12 rounded-md  bg-gradient-to-r from-[#166534] via[#22c55e] to-[#4ade80]">
        <h2 className="text-center md:text-left font-semibold text-2xl lg:text-3xl text-white">
          Ensure your Business Continuity and Service with Galaxy Meet
        </h2>
        <ButtonArrow>
          <Link to="/register">Create an account</Link>
        </ButtonArrow>
      </div>
    </div>
  );
};

export default Poster;
