import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Footer = () => {

  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-400 py-12">
      <div className="max-w-2xl mx-auto py-10">
        <div className="text-center">
        <div className="text-4xl mb-5">
        <Typewriter
            words={['Connect with Galaxy Meet']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
          <p>Stay connected. Anytime, anywhere.</p>
          <div className="flex justify-center my-10">
            <a href="#" className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 hover:bg-gray-100 transition-colors">
              <span className="text-xl">Join the Meeting</span>
            </a>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; 2023 Galaxy Meeting. All Rights Reserved.
          </p>
          <div className="order-1 md:order-2">
            <Link><span className="px-2">About us</span></Link>
            <Link><span className="px-2 border-l">Contact us</span></Link>
            <Link><span className="px-2 border-l">Privacy Policy</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
