import React from 'react';
import Logo from "../../../assets/Logo.png";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter as FaTwitterAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white ps-10 pb-5">
            <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Column 1: Logo and Icons */}
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        {/* Your Logo */}
                        <img src={Logo} alt="Logo" className="w-17 h-16" />
                    </div>
                    {/* Icons */}
                    <div className="flex gap-2 space-x-2 mt-10">
                        <Link to='#'><FaFacebook className="text-white text-2xl" /></Link>
                        <Link to='#'><FaInstagram className="text-white text-2xl" /></Link>
                        <Link to='#'><FaTwitterAlt className="text-white text-2xl" /></Link>
                        <Link to='#'><FaGithub className="text-white text-2xl" /></Link>
                        <Link to='#'><FaDribbble className="text-white text-2xl" /></Link>
                    </div>
                </div>

                {/* Column 2: About, FAQ, Contact, Reviews */}
                <div className="space-y-4">
                    <p className="font-semibold">About Us</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Reviews</p>
                </div>

                {/* Column 3: Email Subscription */}
                <div className="flex flex-col space-y-4">
                    <p className="font-semibold">Subscribe to connect us</p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-2 py-1 border border-gray-400 rounded-l outline-none"
                        />
                        <button className="bg-blue-500 ms-[-100px] text-white px-4 py-1 rounded-r">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
            {/* Horizontal Line */}
            <hr className="mt-8 border-t border-gray-600" />

            {/* Additional Footer Content */}
            <div className="text-center py-4 text-sm">
                <p>
                    <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Cookies</a>
                </p>
                <p className="mt-2">@ 2023. Galaxy Meet. All rights reserved.</p>
            </div>


        </footer>
    );
};

export default Footer;