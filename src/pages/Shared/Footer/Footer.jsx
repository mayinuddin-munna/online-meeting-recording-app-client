import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import Logo from "../../../assets/Logo.png";

const Footer = () => {
  return (
    <footer class="w-full py-2 flex items-center justify-center bg-gradient-to-r from-emerald-300 via-emerald-100 to-emerald-200">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col ">

        <div class="flex sm:items-center sm: mt-8 justify-center">
          <img src={Logo} className="w-[100px] hidden md:block text-center" alt="" />
        </div>
        <div class="flex flex-col">
          <div class="flex mt-24 mb-12 flex-row justify-center md:justify-between">
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-green-700 uppercase">About</a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-green-700 uppercase">Services</a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-green-700 uppercase">Why us</a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-green-700 uppercase">Contact</a>
            <div class="flex flex-row space-x-4 items-center justify-between">
              <a className="text-4xl hover:text-green-700 ">
              <BsInfoCircle />
              </a>
              <a className="text-4xl hover:text-green-700 ">
              <FaEnvelope />
              </a>
              <a className="text-4xl hover:text-green-700 ">
              <FaFacebook />
              </a>
              
            </div>
          </div>
          <hr class="border-gray-600" />
          <p class="w-full text-center my-12 text-gray-600">© 2023 Galaxy Meeting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
