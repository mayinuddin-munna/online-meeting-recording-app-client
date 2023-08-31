import React, { useEffect } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <>
            <div className="container grid grid-cols-1 lg:grid-cols-2  justify-items-center mx-auto text-slate-600 mb-8 md:mt-[-100px] lg:pt-50 lg:h-[60vh] ">

                {/* left side */}
                <div className=" p-10">
                    <h1 className="md:text-6xl text-5xl mb-9">Let's get in touch.</h1>
                    <p>Talk to a member of our team to get to know about our 'Galaxy Meet'.</p>
                    <h3 className='text-xl font-bold mt-4 pl-4 mb-4 border-l-4 border-green-500'>Support</h3>
                    <p>Please visit our <Link to='/' className='text-green-500'>support page</Link> for more information</p>

                </div>
                {/* right side */}
                <div className="bg-white-500 p-10">
                    <h1 className='md:text-6xl text-5xl mb-9'>Contact us</h1>
                    <p>Please fill out the form below, and we'will contact you shortly.</p>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-600">Email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-600">How can I help you?</label>
                        <select
                            className="mt-1 p-2 w-full rounded border border-slate-300 focus:border-slate-400 focus:ring focus:ring-slate-200 focus:outline-none "
                        >
                            <option value="" >Select...</option>
                            <option value="getting-started">Getting Started</option>
                            <option value="technical-support">Technical Support</option>
                            <option value="feature-explanation">Feature Explanation</option>
                            <option value="custom-solutions">Solutions Explanation</option>
                            <option value="feedback-suggestions">Feedback and Suggestions</option>
                        </select>
                        <button className="mt-10 flex items-center justify-between w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                            Contact Us
                            <RiArrowRightLine />
                        </button>
                    </div>

                </div>


            </div>
        </>

    );
};

export default Contact;