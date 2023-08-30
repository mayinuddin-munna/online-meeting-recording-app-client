import React from "react";
import Logo from "../../../assets/Logo.png";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter as FaTwitterAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white ps-10 pb-5">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src={Logo} alt="Logo" className="w-17 h-16" />
          </div>
          <div className="flex gap-2 space-x-2 mt-10">
            <Link to="#">
              <FaFacebook className="text-white text-2xl" />
            </Link>
            <Link to="#">
              <FaInstagram className="text-white text-2xl" />
            </Link>
            <Link to="#">
              <FaTwitterAlt className="text-white text-2xl" />
            </Link>
            <Link to="#">
              <FaGithub className="text-white text-2xl" />
            </Link>
            <Link to="#">
              <FaDribbble className="text-white text-2xl" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Our Team</p>
          <p>FAQ</p>
          <p>Contact</p>
          <p>Reviews</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-semibold">Subscribe to connect us</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-2 py-1 border text-gray-500 border-gray-400 rounded-l outline-none"
            />
            <button className="p-3 w-[110px] rounded rounded-l-none hover:bg-[#5EC38B] hover:text-white border shadow border-l-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-t border-gray-600" />
      <div className="text-center py-4 text-sm">
        <p>
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Cookies</a>
        </p>
        <p className="mt-2">@ 2023. Galaxy Meet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
