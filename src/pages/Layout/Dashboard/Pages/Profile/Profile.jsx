import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.data.user.user);

  return (
    <>
      <div className="flex md:me-72 mb-12 mt-12 md:mb-0 md:mt-0 md:flex-row">
        <h1 className="text-5xl text-white m-12">Welcome to Galaxy Meeting.</h1>
        <img
          src="https://plus.unsplash.com/premium_photo-1661582120130-03b9bdc47a75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwbWVldGluZyUyMHNhbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="User Profile"
          className="w-28 h-28 rounded-full mr-10"
        />
        <div>
          <p>{user.username}</p>
          <p className="text-sm text-gray-600">User address</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <form className="p-5">
          <div className="md:flex md:flex-wrap -mx-2 gap-x-28">
            <div className="w-full px-2 mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-600 text-left"
              >
                First Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="First Name"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-600 text-left"
              >
                Last Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Last Name"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label htmlFor="email" className="block text-gray-600 text-left">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="galaxy@gmail.com"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
          </div>
          <div className="md:flex md:flex-wrap -mx-2 gap-x-28">
            <div className="w-full px-2 mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-600 text-left"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="location"
                className="block text-gray-600 text-left"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="postalCode"
                className="block text-gray-600 text-left"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="personalMeetingID"
                className="block text-gray-600 text-left"
              >
                Personal Meeting ID
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Personal Meeting ID"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="userType"
                className="block text-gray-600 text-left"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="userType"
                name="userType"
                placeholder="User Type"
                className="border rounded-md p-2 w-full text-center"
              />
            </div>
          </div>
          <div className=" mt-6 text-center md:me-14">
            <button
              type="button"
              className="bg-[#5EC38B] text-center text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
