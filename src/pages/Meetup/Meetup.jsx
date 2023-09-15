import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../providers/AuthProvider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { MdVideocam, MdOutlineCopyAll } from 'react-icons/md';
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
    <div className="my-10 md:my-15 lg:my-20">
      {/* Join Meet */}
      <div className="container mx-auto bg-[#F6F6F6] rounded-md p-10 w-full md:w-1/2">
        <h3 className="text-center text-3xl mb-5 font-bold">Join the <span className="text-[#2EA48F]">Meeting</span></h3>
        <form onSubmit={handleForm}>
          <div>
            <input
              className="mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
              required={true}
              type="text"
              defaultValue={user.username}
              name="name"
              placeholder="Enter Your Name"
            />
            <input
              className="mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
              type="text"
              required
              name="meetingId"
              placeholder="Enter meeting ID"
            />
          </div>
          <button
            className="bg-[#5EC38B] text-white text-xl px-6 py-4 rounded-md hover:bg-gradient-to-r from-[#2EA48F] to-[#2EA48F] transition duration-300 w-full md:w-[300px] text-left"
            type="submit"
          >
            Join a Meeting
          </button>
        </form>
        <div className="my-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button onClick={call}
              className="bg-[#5EC38B] text-white text-xl px-6 py-2 rounded-md hover:bg-gradient-to-r from-[#2EA48F] to-[#2EA48F] transition duration-300 flex items-center gap-2 w-full md:w-[300px]"
            >
              <span>Create Meeting ID</span> <MdVideocam />
            </button>
            {code && (
              <div className="relative">
              <input
                className="border-2 mb-2 w-full block bg-[#D6D6D6] px-6 py-4 text-xl rounded-md"
                type="text"
                disabled
                value={code}

              />         
              {!copys ? (
                <MdOutlineCopyAll onClick={copy} className="absolute top-0 right-3 cursor-pointer translate-y-[50%] text-3xl" />
              ) : (
                <p className="absolute text-[#2a6846] text-lg top-0 right-3 cursor-pointer translate-y-[50%]">Copied</p>
              )}
            </div>
            )}
            

          </form>
        </div>
      </div>
    </div>
  );
};

export default Meetup;
