import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#6EE7B7]  py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-16 mb-6 md:mb-0">
          <img src={Logo} alt="" />
        </div>
        <div className="space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:text-emerald-900 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-emerald-900 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-emerald-900 transition-colors">
            Feature
          </a>
          <a href="#" className="hover:text-emerald-900 transition-colors">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className=" hover:text-emerald-900 transition-transform transform hover:scale-110">
            <FaFacebook className="text-2xl"/>
          </a>
          <a href="#" className=" hover:text-emerald-900 transition-transform transform hover:scale-110">
            <FaTwitter className="text-2xl"/>
          </a>
          <a href="#" className=" hover:text-emerald-900 transition-transform transform hover:scale-110">
            <FaInstagram className="text-2xl"/>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2023 Galaxy Meeting. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
