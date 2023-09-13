import React from "react";
import "./Feature.css";
import featureImage from '../../assets/banner-image/Featurecover.jpg';
import { Link } from "react-router-dom";

const FeatureBanner = () => {
  return (
    <section className="feature_ban mb-10 md:mb-20">
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
            <Link
              to="/login"
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#1D2E42] text-white hover:bg-[#5EC38B]"
            >
              Get started
            </Link>
            <Link
              to="/register"
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded font-semibold border-black hover:bg-[#5EC38B] hover:border-[#5EC38B] hover:text-white"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
      <img
        src={featureImage}
        alt="meeting"
        className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-44 dark:bg-gray-500"
      />
    </section>
  );
};

export default FeatureBanner;
