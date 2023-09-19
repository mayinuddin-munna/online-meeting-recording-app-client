import React from "react";
import { FaCalendar, FaCopy } from "react-icons/fa6";
// import background from "../../../../assets/banner-image/personalMeetBackground.avif";
const PersonalMeet = () => {
  return (
    <div className="container mx-auto pt-28 text-gray-100 flex flex-col sm:flex-row justify-center items-center w-full h-screen">
      <div className="w-full sm:w-full p-5 text-black bg-white space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
           Ulfath Ara Islam's Personal Meeting Room
        </h1>
        <div className=" space-y-6">
          <p className="text-gray-800">
            Meeting ID: <span className="text-black">34354545045</span>
          </p>
          <p className="text-gray-800">
            Invite Link:{" "}
            <span className="text-blue-700">
              https:us05web.zoom.us/j/7162113888?pwd=OHdYOWtNdnBSOU5IWVpqbnhj
            </span>
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-gray-800 flex items-center">
            Add to Calendar:{" "}
            <span className="text-black ml-2 flex items-center">
              <FaCalendar className="mr-1" /> Google Calendar
            </span>
          </p>
          <p className="text-gray-800 flex items-center">
            Video:{" "}
            <span className="text-black ml-2">
              Host <span className="text-red-500 ml-1">off</span>
            </span>
          </p>
          <p className="text-gray-800 flex items-center">
            Participants:{" "}
            <span className="text-black ml-2">
              Participants <span className="text-red-500 ml-1">off</span>
            </span>
          </p>
        </div>
        <div className="flex justify-start gap-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Start
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            <FaCopy className="mr-1" />
            Copy Invitation
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalMeet;

//  import React from "react";
// import { FaCalendar, FaCopy } from "react-icons/fa6";

// const PersonalMeet = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-600 to-green-300 py-16">
//       <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">
//           Ulfath Ara Islam's Personal Meeting Room
//         </h1>
//         <div className="mb-4">
//           <p className="text-gray-600">Meeting ID: <span className="text-black">34354545045</span></p>
//           <p className="text-gray-600">Invite Link: <span className="text-black">https://us05web.zoom.us/j/7162113888?pwd=OHdYOWtNdnBSOU5IWVpqbnhj</span></p>
//         </div>
//         <div className="mb-4">
//           <p className="text-gray-600 flex items-center">
//             Add to Calendar:
//             <span className="text-black ml-2 flex items-center">
//               <FaCalendar className="mr-1" /> Google Calendar
//             </span>
//           </p>
//           <p className="text-gray-600 flex items-center">
//             Video:
//             <span className="text-black ml-2">
//               Host <span className="text-red-500 ml-1">off</span>
//             </span>
//           </p>
//           <p className="text-gray-600 flex items-center">
//             Participants:
//             <span className="text-black ml-2">
//               Participants <span className="text-red-500 ml-1">off</span>
//             </span>
//           </p>
//         </div>
//         <div className="flex justify-start">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//             Start
//           </button>
//           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
//             <FaCopy className="mr-1" />
//             Copy Invitation
//           </button>
//           <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
//             Edit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalMeet;
