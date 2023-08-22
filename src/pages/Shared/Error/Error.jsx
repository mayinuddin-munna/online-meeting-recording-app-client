import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import ButtonGradient from "../../../components/ButtonGradient";

const Error = () => {
  return (
    <div className="relative">
      <div>
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/private_files/lf30_bfxeb0to.json"
          className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[450px]
                 w-[350px]"
        >
          <Controls
            visible={!true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      <Link to="/">
        <div className="text-center flex justify-center items-center">
          <ButtonGradient bg="bg-gradient-to-r from-purple-500 to-red-500 ">Back to Home</ButtonGradient>
        </div>
      </Link>
    </div>
  );
};

export default Error;
