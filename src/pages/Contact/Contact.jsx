import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto text-center pt-[130px] pb-28 sm:pb-28 h-auto lg:h-[75vh]">
      <h3 className="text-5xl font-bold uppercase mb-9">Contact Us</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-auto text-slate-600">
        <div className="p-6 md:p-10">
          <h1 className="md:text-4xl text-3xl mb-6 md:mb-9">
            Let's get in touch.
          </h1>
          <p className="text-sm md:text-base">
            Talk to a member of our team to get to know about our 'Galaxy Meet'.
          </p>
          <h3 className="text-lg font-bold mt-3 md:mt-4 pl-2 mb-3 md:mb-4 border-l-4 border-green-500">
            Support
          </h3>
          <p className="text-sm md:text-base">
            Please visit our{" "}
            <Link to="/" className="text-green-500">
              support page
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="bg-white-500 p-6 md:p-10">
          <p className="text-sm md:text-base">
            Please fill out the form below, and we'll contact you shortly.
          </p>
          <div className="mt-4">
            <label className="block text-sm md:text-base font-medium text-slate-600">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm md:text-base font-medium text-slate-600">
              How can I help you?
            </label>
            <select className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none">
              <option value="">Select...</option>
              <option value="getting-started">Getting Started</option>
              <option value="technical-support">Technical Support</option>
              <option value="feature-explanation">Feature Explanation</option>
              <option value="custom-solutions">Solutions Explanation</option>
              <option value="feedback-suggestions">
                Feedback and Suggestions
              </option>
            </select>
            <button className="mt-8 md:mt-10 flex items-center justify-between w-full px-4 py-2 bg-[#5EC38B] text-white rounded hover:bg-green-500">
              Contact Us
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
