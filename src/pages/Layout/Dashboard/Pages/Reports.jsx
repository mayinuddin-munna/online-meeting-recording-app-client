import React from 'react';
import { FaArrowCircleUp, FaCheckCircle } from 'react-icons/fa';
import background from "../../../../assets/banner-image/personalMeetBackground.avif";

const Reports = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white h-screen bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="px-10 py-10 lg:py-36">
        <h1 className="text-4xl font-semibold mb-6">
          You are currently on a basic plan (free)
        </h1>
        <button className="px-8 py-3 m-2 text-lg text-left font-semibold rounded bg-[#1D2E42] hover:bg-green-600 transition-colors">
          Upgrade <FaArrowCircleUp className="inline ml-2" />
        </button>
        <p className="text-sm my-4">
          To view the following reports and other advanced features, upgrade to a Pro plan.
        </p>
        <ul className="list-none text-left text-lg">
          <li className="mb-4">
            <FaCheckCircle className="inline  mr-2" />
            <span className="font-semibold text-xl">Daily:</span> Show daily number of new users, meetings, participants, and meeting minutes in a month.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Active Hosts:</span> View meetings, participants, and meeting minutes within a specified time range.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Upcoming Events:</span> View upcoming meetings and webinars.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Meetings:</span> View registration reports and poll reports for meetings.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Cloud Recording:</span> View detailed information about cloud storage usage by host.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Remote Support:</span> View in-meeting support sessions during a certain period.
          </li>
          <li className="mb-4">
            <FaCheckCircle className="inline mr-2" />
            <span className="font-semibold text-xl">Contact Center:</span> View Contact Center usage in a time range.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
