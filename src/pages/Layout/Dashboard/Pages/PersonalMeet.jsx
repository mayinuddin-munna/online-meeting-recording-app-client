import React, { useState } from "react";
import { FaCalendar} from "react-icons/fa6";
import CalendarComponent from "./Calender";

const PersonalMeet = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="container mx-auto pt-28 text-gray-100 flex flex-col sm:flex-row justify-center items-center bg-white w-full h-screen">
      <div className="w-full lg:ps-52 p-4 sm:p-20 text-black bg-white space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Ulfath Ara Islam's Personal Meeting Room
        </h1>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-gray-800">
            Meeting ID: <span className="text-black">w8DuNJXkaZWlMJ_CAABz</span>
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-gray-800 flex items-center">
            Add to Calendar:{" "}
            <span
              className="text-black ml-2 flex items-center cursor-pointer"
              onClick={toggleCalendar}
            >
              <FaCalendar className="mr-1" /> Google Calendar
            </span>
          </p>
          {/* ... other content ... */}
        </div>
      </div>
      {showCalendar && (
        <div className="fixed top-0 right-0 sm:w-1/2 h-screen sm:h-full sm:p-[100px] flex flex-col items-center justify-center z-50 text-gray-600 bg-white">
          <button
            className="absolute top-4 right-4 text-gray-800 hover:text-red-500"
            onClick={toggleCalendar}
          >
            Close
          </button>
          <CalendarComponent /> {/* Render the CalendarComponent when showCalendar is true */}
        </div>
      )}
    </div>
  );
};

export default PersonalMeet;
