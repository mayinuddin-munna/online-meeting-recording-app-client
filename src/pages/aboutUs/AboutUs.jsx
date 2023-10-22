import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import portfolio from "../../assets/portfolio.png";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetch("https://galaxy-meeting.onrender.com/aboutUs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAboutUs(data); // Set the fetched data into the state
      });
  }, []);

  return (
    <div className="my-16">
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/1617b396-cd26-48b3-a56b-6891c536052c/q278NspvNG.json"
          className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[450px]
                 w-[350px]"
        >
          <Controls
            visible={!true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>

      <h5 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl mb-16 px-5">
        The People Behind <br className="md:hidden" /> Galaxy Meet
      </h5>
      <section className="mt-5 mx-4">
        <div className="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          {aboutUs.map((about) => (
            <div
              key={about._id}
              className={`bg-slate-200 p-5 shadow-md flex flex-col justify-center gap-5 rounded-xl sm:px-2 
                             md:px-5 sm:mx-2 md:mx-5 w-full`}
            >
              <div className=" flex items-center justify-center">
                <img
                  src={about.image}
                  alt={about.name}
                  className="w-36 h-36  rounded-full"
                />
              </div>
              {/* Content */}
              <div>
                <div className=" flex items-center gap-5 justify-center py-5">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {about.name}
                  </h3>
                </div>
                <p className="text-lg mb-2">
                  <span className="font-semibold pr-2">Position:</span>
                  {about.position}
                </p>
                <p className="text-lg mb-2 flex justify-start gap-2 items-center">
                  <span className="font-semibold pr-2 flex justify-start gap-2 items-center">
                    <MdAlternateEmail /> Email:
                  </span>
                  <span className="text-blue-600">
                    {about.socialMedia.email}
                  </span>
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold pr-2">Bio:</span>
                  {about.detail}
                </p>
                <div className="flex items-center justify-evenly my-10 mb-2">
                  <Link to={about.socialMedia.facebook} target="_blank">
                    <FaFacebook className="text-2xl text-blue-600" />
                  </Link>
                  <Link to={about.socialMedia.github} target="_blank">
                    <FaGithub className="text-3xl" />
                  </Link>
                  <Link to={about.socialMedia.linkedin} target="_blank">
                    <FaLinkedin className="text-2xl text-blue-600" />
                  </Link>
                  <Link to={about.socialMedia.portfolio} target="_blank">
                    <img src={portfolio} className=" w-8" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
