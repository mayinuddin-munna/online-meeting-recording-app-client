import React from "react";
import { RiDeviceLine, RiSignalWifiLine, RiVideoChatFill } from "react-icons/ri";
import { RoughNotation } from "react-rough-notation";
import DoNotWorry from "../../../assets/do-not-worry.png"
const NoWorries = () => {
  return (
    <div>
      <div className=" bg-[#111827] py-10 md:py-0 md:h-[50vh] flex items-center text-center">
        <div className="container mx-auto text-white md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">
            <RoughNotation type="underline" show={true} color="yellow">No Worries, No Risk</RoughNotation>
          </h1>
          <p>
            If you fail to clear the test, no harm done. Your scores will remain
            private and will not be shared with any company. You will be allowed
            to retake the test after a stipulated number of days.
          </p>
        </div>
      </div>
      <div className=" bg-[#050C1B] px-6 py-12 md:h-80vh flex items-center">
        <div className="container mx-auto text-white flex items-center flex-col md:flex-row gap-8 md:gap-4">
          <div className="flex-1">
            <p className="text-center text-2xl">
              <img className="w-56 block mx-auto" src={DoNotWorry} alt="" />
            </p>
            <p className="text-center text-2xl md:text-4xl">What can I expect <br />
              during the test?</p>
          </div>
          <div className="flex-1">
            <div className="flex items-start gap-6">
              <div className="icon-worries text-2xl bg-[#31D4D2] px-3 rounded-lg py-3 text-black">
                <RiDeviceLine />
              </div>
              <div className="text">
                <h2 className="text-xl font-semibold mb-2">
                  Seamless Multi-Device Integration
                </h2>
                <p>Easily switch between devices without interruption during video calls. Start a call on your computer, then seamlessly transition to your mobile device without disconnecting, ensuring you stay connected no matter where you are.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-4">
              <div className="icon-worries text-2xl bg-[#31D4D2] px-3 rounded-lg py-3 text-black">
                <RiSignalWifiLine />
              </div>
              <div className="text">
                <h2 className="text-xl font-semibold mb-2">
                  Adaptive Bandwidth Optimization
                </h2>
                <p>
                  GalaxyMeet intelligently adjusts video quality based on your network connection, providing a smooth video calling experience even in low-bandwidth environments. Enjoy clear communication without disruptions, regardless of your internet speed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-4">
              <div className="icon-worries text-2xl bg-[#31D4D2] px-3 rounded-lg py-3 text-black">
                <RiVideoChatFill />
              </div>
              <div className="text">
                <h2 className="text-xl font-semibold mb-2">
                  Highly Secure Video Calls
                </h2>
                <p>
                  Our video calling solution is built to meet strict regulatory standards. We implement robust security protocols and encryption to ensure your video calls are both secure and compliant with relevant regulations. Rest easy knowing your sensitive conversations are protected and legally sound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoWorries;
