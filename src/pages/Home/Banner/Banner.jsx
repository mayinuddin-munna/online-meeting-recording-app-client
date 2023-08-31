import React from "react";
import HomeIcon from "../../../assets/home-icon.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mb-16 lg:mb-40">

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />

        <div className="relative p-0 xl:p-48 bg-opacity-20 bg-emerald-400">

          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 160"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>

          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white lg:text-5xl sm:leading-none">
                  Galaxy Meet <br className="hidden md:block" />
                  without a Hitch
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Distance does not matter. It is the meeting that matters the
                  most.
                </p>
                <Link
                  to="/register"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Sign up Now
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>

              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <Link
                        className="inline-flex justify-center items-center h-12 px-6 mr-6 font-medium tracking-wide bg-[#5EC38B] text-white"
                      >
                        Join a meeting
                      </Link>
                      <input
                        placeholder="Join with code or link"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />

                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
