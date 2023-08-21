import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
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
                    <h2 className="text-4xl font-semibold mb-4">Elevate Your Online Meetings</h2>
                    <p className="text-lg mb-8">
                        Explore our powerful features designed to enhance your virtual collaboration experience.
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
                                    <h3 className="text-xl font-semibold mb-2">For Education</h3>
                                    <p className="text-gray-600">
                                        Engage students with interactive online classes, real-time quizzes, and collaborative virtual whiteboards for an enriched learning experience.
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
                                    <h3 className="text-xl font-semibold mb-2">Seamless Tech Support
                                    </h3>
                                    <p className="text-gray-600">
                                    Provide instant tech support through screen sharing and remote access tools, resolving IT issues efficiently and minimizing downtime.
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
                                    <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                                    <p className="text-gray-600">
                                    Enhance customer satisfaction by offering personalized video calls, sharing product demos, and resolving issues face-to-face, building stronger connections.
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
                                    <h3 className="text-xl font-semibold mb-2">For Sales
                                    </h3>
                                    <p className="text-gray-600">
                                    Showcase products and services virtually, share detailed demos, and close deals faster by engaging potential customers in real-time presentations.
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
                                    <h3 className="text-xl font-semibold mb-2">For Marketing</h3>
                                    <p className="text-gray-600">
                                    Foster creative collaboration among teams by sharing marketing materials, brainstorming ideas, and discussing strategies during online meetings.

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
                                    Conduct secure telemedicine consultations with patients, share medical reports, and offer professional medical advice remotely for better healthcare access.
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
                                    <h3 className="text-xl font-semibold mb-2">For Secure Finance</h3>
                                    <p className="text-gray-600">
                                    Foster creative Ensure data privacy during financial discussions with secure virtual meetings, document sharing, and encrypted communication for confidential matters.


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
                    <h2 className="text-4xl font-semibold mb-4">Start Your Next Meeting with Galaxy Meet</h2>
                    <p className="text-lg mb-8">Join millions who trust us for their virtual communication needs.</p>
                    <button className="bg-white text-green-600 rounded-full px-6 py-3 font-semibold">
                        Sign Up for Free
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Solutions;