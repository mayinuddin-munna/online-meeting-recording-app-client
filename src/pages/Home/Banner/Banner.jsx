import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bannerImg from "../../../assets/banner-image/gm.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { io } from "socket.io-client";
import { MdOutlineCopyAll, MdVideocam } from "react-icons/md";
import { AuthContext } from "../../../providers/AuthProvider";

const Banner = () => {
  const [code, setCode] = useState();
  const [copies, setCopies] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const socket = io("https://zoom-backend-b2ys.onrender.com/", {
    transports: ["websocket"],
  });

  // create meeting code
  const joinWithCall = () => {
    setCopies(false);
    socket.emit("me", socket.id);
    socket.on("getid", (arg) => {
      setCode(arg);
    });
  };

  // handle join meeting form
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const meetingId = form.meetingId.value;
    joinMeeting(username, meetingId);
  };

  // onclick navigate to the meeting page
  const joinMeeting = (name, val1) => {
    navigate(`/${name}/${val1}`);
  };

  return (
    <div className="relative">
      <img
        src={bannerImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt="banner image"
      />
      <div className="relative p-0 xl:p-52 bg-opacity-10 bg-slate-950">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 160"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white lg:text-[54px] sm:leading-tight">
                Galaxy Meet <br className="hidden md:block" />
                <span className="pt-12">Without a Hitch</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                In the huge space of the universe, how far things are does not
                really matter when compared to the importance of people coming
                together. Galaxy Meeting - it is like stars and planets getting
                together.
              </p>
              <Link
                to="/register"
                aria-label=""
                className="text-white inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Sign up Now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="relative inline-flex w-full max-w-xl lg:px-20 xl:w-5/12">
              <div className="bg-white/20 backdrop-blur-4xl border border-white/30 rounded shadow-2xl p-7 sm:p-10">
                <form onSubmit={handleForm}>
                  <input
                    name="name"
                    type="text"
                    required={true}
                    placeholder="Enter Your Name"
                    defaultValue={user?.username}
                    className="mb-2 w-full block px-6 py-3 text-xl rounded-md"
                  />
                  <input
                    required
                    type="text"
                    value={code}
                    name="meetingId"
                    placeholder="Enter Meeting ID"
                    className="mb-2 w-full block px-6 py-3 text-xl rounded-md"
                  />
                  <button
                    onClick={joinWithCall}
                    className="bg-[#5EC38B] text-white text-xl px-6 py-2 rounded-md hover:bg-gradient-to-r from-[#2EA48F] to-[#2EA48F] transition duration-300 flex items-center gap-2 w-full md:w-[300px]"
                  >
                    <span>Create ID & Join</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
