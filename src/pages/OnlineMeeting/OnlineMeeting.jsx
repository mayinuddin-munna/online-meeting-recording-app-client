import React from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCircleFill, BsDisplayFill } from "react-icons/bs";
import { BiFullscreen } from "react-icons/bi";
import Video from "../Home/Video";
import Chat from "../NewMeetings/Chat";
import {
  IoMic,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoSend,
  IoVideocam,
  IoVolumeMedium,
} from "react-icons/io5";


const OnlineMeeting = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center h-[700px]">
        <div className="flex flex-col justify-between h-full md:w-1/12  px-5 py-[100px] border-r border-gray-300">
          <div>
            <a className="font-bold" href="#">
              Galaxy Meet
            </a>
          </div>
          <div className="flex flex-col justify-between h-1/2">
            <FiHome />
            <FaVideo />
            <IoNotificationsOutline />
            <FaComment />
            <IoPeopleOutline />
            <AiOutlineGlobal />
          </div>
          {/* profile image */}
          <img
            className="rounded-full w-10 h-10"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="img"
          />
        </div>
        <div className="w-60/12 md:w-6/12 ms-3 p-2 rounded-xl">
          <h4 className="text-center p-3 border-b border-gray-300">
            Meet title: discuss Management project
          </h4>
          <div className="flex">
            <BsCircleFill className="mt-4" color="red" size={20} />
            <p className="p-3">Record 00:25:36</p>
          </div>
          <Video />
          <div className="flex justify-between mt-[20px]">
            <div className="border p-2">
              <IoVolumeMedium className="border p-29" />
            </div>
            <div className="border p-2">
              <IoMic />
            </div>
            <div className="border p-2">
              <IoVideocam />
            </div>
            <div className="border p-2">
              <BsDisplayFill />
            </div>
            <div className="border p-2">
              <BiFullscreen />
            </div>
            <div className="border p-2">
              <FiLogOut />
            </div>
          </div>
        </div>
        <div>
         <Chat/>
        </div>
      </div>
    </>
  );
};

export default OnlineMeeting;
