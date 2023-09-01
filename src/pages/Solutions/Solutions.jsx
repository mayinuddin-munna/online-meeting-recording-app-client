import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MdHealthAndSafety, MdHomeRepairService, MdSchool } from 'react-icons/md';
import { FaCashRegister, FaCommentsDollar } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiTechnoHeart } from 'react-icons/gi';
import ButtonArrow from "../../components/ButtonArrow";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Solutions = () => {

  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    fetch("solutions.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSolutions(data); // Set the fetched data into the state 
      })
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0 " style={{
          backgroundImage:
            "linear-gradient(to right,  rgba(16, 185, 129, 0.7), rgba(6 ,182, 212, 0.7), rgba(45, 212, 191, 0.7)",
        }}></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-semibold mb-4">
            Elevate Your Online Meetings
          </h2>
          <p className="text-lg mb-8">
            Explore our powerful features designed to enhance your virtual
            collaboration experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          {/* Features Section */}
          <section>
            <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              {/* Feature 1 */}
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center  gap-5 rounded-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img
                    src={solution.img}
                    alt=""
                    className="md:w-1/2 rounded-lg "
                  />

                  {/* Content */}
                  <div className="text-left">
                    <div className=" flex items-center gap-5 justify-center pt-10">

                      <p>
                        {solution.title === "Education" && <MdSchool className="text-3xl" />}
                        {solution.title === "IT" && <GiTechnoHeart className="text-3xl" />}
                        {solution.title === "Service" && <RiCustomerService2Fill className="text-3xl" />}
                        {solution.title === "Sales" && <FaCashRegister className="text-3xl" />}
                        {solution.title === "Marketing" && <MdHomeRepairService className="text-3xl" />}
                        {solution.title === "Healthcare" && <MdHealthAndSafety className="text-3xl" />}
                        {solution.title === "Finance" && <FaCommentsDollar className="text-3xl" />}
                      </p>

                      <h3 className="text-4xl font-semibold mb-2 ">

                        {solution.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg lg:px-10 py-5 lg:py-20">
                      {solution.content}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center mx-auto gap-5">
                      <Link to='/'>
                        <button className="px-8 py-3 m-2  text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 flex items-center justify-between mx-auto gap-5 hover:bg-teal-600"
                        >
                          Learn More  <BsFillArrowRightCircleFill />
                        </button>
                      </Link>

                      <Link to='/online-meeting'>
                        <button
                          type="button"
                          className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 flex items-center justify-between mx-auto gap-5"
                        >
                          Start Meeting  <BsFillArrowRightCircleFill />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* MdMedicalServices */}

            </div>
          </section>
          {/* More features can be added similarly */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage:
            "linear-gradient(to right,  rgba(16, 185, 129, 0.7), rgba(6 ,182, 212, 0.7), rgba(45, 212, 191, 0.7)",
        }}></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-semibold mb-4">
            Start Your Next Meeting with Galaxy Meet
          </h2>
          <p className="text-lg mb-8">
            Join millions who trust us for their virtual communication needs.
          </p>
          <Link to='/register'><button className="bg-white text-green-600 rounded-full px-6 py-3 font-semibold">
            Sign Up for Free
          </button></Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
