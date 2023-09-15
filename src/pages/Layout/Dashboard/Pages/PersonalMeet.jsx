import React from "react";
import { FaCalendar, FaCopy } from "react-icons/fa6";
// import background from "../../../../assets/banner-image/personalMeetBackground.avif";
const PersonalMeet = () => {
  return (
    <div className="container mx-auto mt-28 text-gray-100 flex flex-col sm:flex-row justify-center items-center gap-y-4  w-full h-screen">
      <div className="w-full sm:w-1/2 p-5">
        <div className="flex flex-col gap-12">
          <div className="flex">
            <span className="w-1/3">Topic:</span>
            <span className="w-2/3">
              Ulfath Ara Islam's Personal Meeting Room
            </span>
          </div>
          <div className="flex">
            <span className="w-1/3">Meeting ID:</span>
            <span className="w-2/3">34354545045</span>
          </div>
          <div className="flex">
            <span className="w-1/3">Invite Link:</span>
            <span className="w-2/3">
              https://us05web.zoom.us/j/7162113888?pwd=OHdYOWtNdnBSOU5IWVpqbnhj
            </span>
          </div>
          <div className="flex">
            <span className="w-1/3">Add to:</span>
            <span className="w-2/3 flex gap-x-3 items-center">
              <FaCalendar />
              <p>Google Calender</p>
            </span>
          </div>
          <div className="flex">
            <span className="w-1/3">Video:</span>
            <span className="inline-block mr-24">Host</span>
            <span className="inline-block">off</span>
          </div>
          <div className="flex">
            <span className="w-1/3"></span>
            <span className="inline-block mr-10">Participants</span>
            <span className="inline-block">off</span>
          </div>
          <div className="flex justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Start
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            <FaCopy />
              Copy Invitation
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMeet;
