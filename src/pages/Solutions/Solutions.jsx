import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-100 via-green-200 to-transparent"></div>
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
                  className={`bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-5 rounded-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img
                    src={solution.img}
                    alt=""
                    className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                  />

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="text-3xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600">
                      {solution.content}
                    </p>
                  </div>
                </div>
              ))}



            </div>
          </section>
          {/* More features can be added similarly */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-100 via-green-200 to-transparent"></div>
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
