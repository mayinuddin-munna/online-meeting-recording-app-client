import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../providers/AuthProvider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { MdVideocam } from 'react-icons/md';
const Meetup = () => {

  const { user } = useContext(AuthContext);

  const socket = io("https://zoom-backend-b2ys.onrender.com/", {
    transports: ["websocket"],
  });
  // const socket = io('http://localhost:5000/', {
  //   transports: ["websocket"]
  // })
  // const socket = io('http://localhost:5000/')

  const [code, setCode] = useState();
  const [copys, setCopys] = useState(false);
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // create meeting code
  const call = () => {
    setCopys(false);
    socket.emit("me", socket.id);
    socket.on("getid", (arg) => {
      setCode(arg);
    });
  };

  // onclick copy the meeting code
  const copy = (e) => {
    navigator.clipboard.writeText(code);
    setCopys(!copys);
  };

  // const change = (e) => {
  //   setVal(e.target.value);
  // };



  // // handle the onchange event
  // const namehandle = (e) => {
  //   setName(e.target.value);
  // };

  // handle join meeting form
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const meetingId = form.meetingId.value;

    setName(username);
    setVal(meetingId)

    join(username, meetingId);
  }

  // onclick navigate to the meeeting page
  const join = (name, val1) => {
    navigate(`/${name}/${val1}`);
  };

  return (
    <div className="mb-40">
      
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/c60ae679-ca6f-46a1-b0f3-93ea3fec8f8c/WGfnHwgjlg.json"
          className='w-full md:w-1/4'
        >
          <Controls
            visible={!true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      <div className="border-2 border-indigo-600  p-10 flex flex-col container mx-auto  md:flex-row">
        <div className="mx-auto p-4 w-full  md:w-1/3">
          <h2 className=" text-2xl text-center my-6 text-green-600 ">
            Create The Meeting Id
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" flex flex-col mx-auto space-y-6 "
          >
            {code && (
              <div
                type="text"
                className="border p-2 flex flex-row justify-between"
              >
                <p className=" w-11/12 overflow-hidden">{code}</p>
                {!copys ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={copy}
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 bg-slate-100 rounded-xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            )}
            <button
              className=" bg-blue-500 text-white py-2 rounded-lg "
              onClick={call}
            >
              create Meeting
            </button>
          </form>
        </div>
        {/* join meeting */}
        <div className="mx-auto p-4 w-full  md:w-1/3">
          <h2 className="text-2xl text-center my-6 text-green-600 ">
            join The Meeting
          </h2>
          <form onSubmit={handleForm} className="flex flex-col mx-auto space-y-6 ">
            <input
              required={true}
              type="text"
              defaultValue={user.username}
              // value={name}
              // onChange={namehandle}
              name="name"
              className="border p-2"
              placeholder="Enter your Name"
            />
            <input
              required
              name="meetingId"
              // value={val}
              // onChange={change}
              type="text"
              className="border p-2"
              placeholder="Enter your code"
            />
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 rounded-lg"
            >
              join Meeting
            </button>
          </form>
        </div>
      </div>

      {/* Join Meet */}
      <div className="container mx-auto bg-[#F6F6F6] rounded-md p-10 w-full md:w-1/2">
        <h3 className="text-center text-3xl mb-5">Join the Meeting</h3>
        <form >
        <div>
        <input
        className="mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
        className="mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
          type="text"
          placeholder="Enter meeting ID"
        />
        </div>
        <button
        className="bg-[#5EC38B] text-white text-xl px-6 py-4 rounded-md hover:bg-gradient-to-r from-[#2EA48F] to-[#2EA48F] transition duration-300 w-full md:w-[300px] text-left"
        >
          Join a Meeting
        </button>
      </form>
      <div className="my-4">
      <button
        className="bg-[#5EC38B] text-white text-xl px-6 py-2 rounded-md hover:bg-gradient-to-r from-[#2EA48F] to-[#2EA48F] transition duration-300 flex items-center gap-2 w-full md:w-[300px]"
        >
          <span>Create Meeting ID</span> <MdVideocam/>
        </button>
        <div className="bg-[#D6D6D6] mt-3 rounded-md py-4 px-2">
        <input
        className="mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
          type="text"
          disabled
          
        />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Meetup;
