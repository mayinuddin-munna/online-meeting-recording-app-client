import React, { useRef } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef(null);

  console.log(import.meta.env.VITE_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Message send.',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="container mx-auto  pt-32 pb-28 sm:pb-28 h-auto">
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center uppercase mb-9">Contact Us</h3>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center items-center mx-auto text-slate-600">
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
            <Link to="/forum" className="text-green-500">
              support page
            </Link>{" "}
            for more information.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-white-500 p-6 md:p-10 md:w-[75%] lg:w-1/2">
          <p className="text-sm md:text-base">
            Please fill out the form below, and we'll contact you shortly.
          </p>
          <div className="my-2">
            <label className="block text-sm md:text-base font-medium text-slate-600">User Name</label>
            <input type="text" name="user_name" placeholder="Enter your name" className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none" required />
          </div>
          <div className="mt-4">
            <label className="block text-sm md:text-base font-medium text-slate-600">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none"
              placeholder="Enter your email"
              required
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
          </div>
          <div className="my-2 space-y-4">
            <label className="block text-sm md:text-base font-medium text-slate-600">
            Your message
            </label>
            <textarea placeholder="Type here..." name="message"  className="w-full p-2 border-2 rounded-lg focus:border-slate-400"/>
          </div>
          <button type="submit" className="mt-8 md:mt-10 flex items-center justify-between w-full px-4 py-2 bg-[#5EC38B] text-white rounded hover:bg-green-500">
            Contact Us
            <RiArrowRightLine />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
