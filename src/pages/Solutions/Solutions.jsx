import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
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
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row-reverse justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661582120130-03b9bdc47a75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwbWVldGluZyUyMHNhbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">For Education</h3>
                  <p className="text-gray-600">
                    Elevate education with Galaxy Meet. Experience interactive online classes, real-time quizzes, and collaborative virtual whiteboards, creating an enriched learning journey. Break geographical barriers, engage students actively, and empower educators to foster deeper connections.
                  </p>

                </div>
              </div>
              {/* Feature 2 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661721903096-017523abaa9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhhcHB5JTIwb25saW5lJTIwbWVldGluZyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />
                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">
                    Seamless Tech Support
                  </h3>
                  <p className="text-gray-600">
                    Streamline technical assistance with Galaxy Meet's seamless tech support features. Our platform empowers you to provide instant solutions by leveraging screen sharing and remote access tools. Effectively resolve IT issues, minimize downtime, and ensure smooth operations across your organization or educational institution.
                  </p>
                </div>
              </div>
              {/* feature 3 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col  md:flex-row-reverse justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661777972788-960595e378ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwbWVldGluZyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">
                    Customer Service
                  </h3>
                  <p className="text-gray-600">
                    Elevate customer satisfaction with Galaxy Meet's customer service capabilities. Provide tailored experiences through personalized video calls and engaging product demos. By addressing issues face-to-face, you can foster stronger connections with your customers and ensure their needs are met effectively.
                  </p>
                </div>
              </div>
              {/* feature 4 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />
                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">For Sales</h3>
                  <p className="text-gray-600">
                    Transform your sales strategy with Galaxy Meet. Display your products and services virtually, offering in-depth demos that leave a lasting impression. Accelerate deal closures by engaging potential customers through real-time presentations. With Galaxy Meet, you can connect, captivate, and convert like never before.
                  </p>

                </div>
              </div>
              {/* feature 5 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col  md:flex-row-reverse justify-center items-center gap-5 rounded-xl "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://media.istockphoto.com/id/1335043984/photo/young-woman-using-a-headset-and-laptop-at-home-office.webp?b=1&s=170667a&w=0&k=20&c=9LGbkofh4F3iflnVkq-tpTvxTtWVr448x7VMiex3xdI="
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">For Marketing</h3>
                  <p className="text-gray-600">
                    Ignite innovation in your marketing endeavors with Galaxy Meet. Facilitate dynamic teamwork by seamlessly sharing marketing materials, brainstorming ideas during online meetings. Elevate your campaigns with real-time collaboration, ensuring that your marketing efforts are fueled by collective creativity and expertise.
                  </p>
                </div>
              </div>
              {/* feature 6 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661580561759-81f0cc557f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbWVldGluZyUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />
                {/* Content */}
                <div className="text-left">
                  <h3 className="text-3xl font-semibold mb-2">For Healthcare
                  </h3>
                  <p className="text-gray-600">
                    Revolutionize healthcare delivery with Galaxy Meet. Enable secure medicine consultations, seamlessly share medical reports, and extend professional medical guidance remotely. By leveraging our platform, you enhance healthcare access, ensuring patients receive the care they need regardless of location.
                  </p>
                </div>

              </div>
              {/* feature 7 */}
              <div
                className="bg-white p-6 selection:rounded-lg shadow-md flex flex-col  md:flex-row-reverse justify-center items-center gap-5 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbWVldGluZyUyMHNlY3VyZSUyMGZpbmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                  alt=""
                  className="md:w-1/2 rounded-lg md:rounded-none md:rounded-l-lg"
                />

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    For Secure Finance
                  </h3>
                  <p className="text-gray-600">
                    Elevate financial conversations with Galaxy Meet's security features. Guarantee data privacy through secure virtual meetings, confidential document sharing, and encrypted communication. Whether discussing sensitive matters, our platform ensures the highest level of security for your financial discussions.
                  </p>

                </div>
              </div>
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
          <button className="bg-white text-green-600 rounded-full px-6 py-3 font-semibold">
            Sign Up for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
