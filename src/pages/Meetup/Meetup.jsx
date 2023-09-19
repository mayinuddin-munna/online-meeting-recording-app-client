import { useState } from "react";
import io from "socket.io-client";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdVideocam, MdOutlineCopyAll } from "react-icons/md";

const Meetup = () => {
  const { user } = useContext(AuthContext);

  const socket = io("https://zoom-backend-b2ys.onrender.com/", {
    transports: ["websocket"],
  });
  // const socket = io('http://localhost:5000/', {
  //   transports: ["websocket"]
  // })

  const [code, setCode] = useState();
  const [copys, setCopys] = useState(false);
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

  // handle join meeting form
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const meetingId = form.meetingId.value;
    join(username, meetingId);
  };

  // onclick navigate to the meeeting page
  const join = (name, val1) => {
    navigate(`/${name}/${val1}`);
  };

  return (
    <div className="my-10 md:my-15 lg:my-20">
      <div className="flex flex-col md:flex-row container mx-auto items-center">
        <div className="flex-1 px-10">
        <h1 className="text-3xl font-bold ">Welcome to Our <br /><span className="text-[#2EA48F]">Virtual Meetings</span></h1>
        <p>To join a meeting, simply enter the meeting ID provided by the host and click the "Join Meeting" button below. If you're the host, you can create a new meeting by clicking "Create Meeting ID."</p>

        </div>
        <div className="flex-1">
        <h3 className="text-center text-3xl mb-5 font-bold">
          Join the <span className="text-[#2EA48F]">Meeting</span>
        </h3>
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
        </div>
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row container mx-auto mt-16">
        <div className="flex-1 px-10">
        <div className="my-4 flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button
              onClick={call}
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
                  <MdOutlineCopyAll
                    onClick={copy}
                    className="absolute top-0 right-3 cursor-pointer translate-y-[50%] text-3xl"
                  />
                ) : (
                  <p className="absolute text-[#2a6846] text-lg top-0 right-3 cursor-pointer translate-y-[50%]">
                    Copied
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
        </div>
         <div className="flex-1 px-10">
         <h1 className="text-3xl font-bold ">Galaxy <span className="text-[#2EA48F]">Meeting Room</span></h1>
         <p>Welcome to the Galaxy Meeting Room, where the possibilities are as vast as the universe. Step into a world of seamless online collaboration and communication. Whether you're hosting a business conference, educational seminar, or connecting with friends and family, our Galaxy Meeting Room provides a stellar space for your virtual gatherings.</p>

        </div>
      </div>
      {/* Join Meet */}
      <div style={{display:"none"}} className="container mx-auto bg-[#F6F6F6] rounded-md p-10 w-full md:w-1/2">
        <h3 className="text-center text-3xl mb-5 font-bold">
          Join the <span className="text-[#2EA48F]">Meeting</span>
        </h3>
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
            <button
              onClick={call}
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
                <input
                  disabled
                  value={code}
                  type="text"
                  placeholder="Enter meeting link"
                  className="px-8 py-3 text-gray-200 rounded-sm"
                />
                {!copys ? (
                  <MdOutlineCopyAll
                    onClick={copy}
                    className="absolute top-0 right-3 cursor-pointer translate-y-[50%] text-3xl"
                  />
                ) : (
                  <p className="absolute text-[#2a6846] text-lg top-0 right-3 cursor-pointer translate-y-[50%]">
                    Copied
                  </p>
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
