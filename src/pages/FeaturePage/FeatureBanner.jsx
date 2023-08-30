import React from "react";
import "./Feature.css";

const FeatureBanner = () => {
  return (
    <section className="mb-20">
      <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-36 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:max-w-3xl dark:text-gray-900">
            Galaxy Meeting: Connect across the universe
          </h1>
          <p className="mt-6 mb-8 text-lg md:text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Connect from anywhere at anytime, Bring team and ideas together in a
            virtual space.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://i.ibb.co/4RdMSDj/Feature-cover.jpg"
        alt="meeting"
        className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-44 dark:bg-gray-500"
      />
    </section>
  );
};

export default FeatureBanner;
