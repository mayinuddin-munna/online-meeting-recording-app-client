import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
const Contact = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container  mx-auto flex flex-col sm:flex-row text-slate-600">
                {/* left side */}
                <div className="w-1/2 p-10 bg-slate-50">
                    <h1 className="text-3xl">Let's get in touch.</h1>
                    <p>Talk to a member of our team to get to know about our 'Galaxy Meet'.</p>
                </div>
                {/* right side */}
                <div className="bg-white-500 w-1/2 p-10">
                    <h1 className='text-xl'>Contact us</h1>
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
        </div>

    );
};

export default Contact;