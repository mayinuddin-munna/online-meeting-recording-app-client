import React from 'react';
import MeetingPng from "../../../../../../assets/icons/onlineMeeting.png"


const MeetingQuality = () => {
    return (
        <section>
            <div className='grid grid-cols-2 justify-items-center'>
                {/* information */}
                <div className='grid grid-cols-2 lg:gap-16 justify-center items-center px-10 py-20'>
                    <div className='bg-white px-8 py-12 rounded-md shadow-md'>
                        <div className='grid grid-cols-2 '>
                            <div>
                                <h2 className='font-bold text-4xl mb-4'>100+</h2>
                                <p className='font-semibold text-lg'>Total Meetings</p>
                            </div>
                            <div className='w-20'>
                                <img src={MeetingPng} alt="" />
                            </div>
                            <p className='font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                        </div>
                    </div>
                    <div className='bg-white px-8 py-12 rounded-md shadow-md'>
                        <div className='grid grid-cols-2 '>
                            <div>
                                <h2 className='font-bold text-4xl mb-4'>100+</h2>
                                <p className='font-semibold text-lg'>Total Meetings</p>
                            </div>
                            <div className='w-20'>
                                <img src={MeetingPng} alt="" />
                            </div>
                            <p className='font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                        </div>
                    </div>
                    <div className='bg-white px-8 py-12 rounded-md shadow-md'>
                        <div className='grid grid-cols-2 '>
                            <div>
                                <h2 className='font-bold text-4xl mb-4'>100+</h2>
                                <p className='font-semibold text-lg'>Total Meetings</p>
                            </div>
                            <div className='w-20'>
                                <img src={MeetingPng} alt="" />
                            </div>
                            <p className='font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                        </div>
                    </div>
                    <div className='bg-white px-8 py-12 rounded-md shadow-md'>
                        <div className='grid grid-cols-2 '>
                            <div>
                                <h2 className='font-bold text-4xl mb-4'>100+</h2>
                                <p className='font-semibold text-lg'>Total Meetings</p>
                            </div>
                            <div className='w-20'>
                                <img src={MeetingPng} alt="" />
                            </div>
                            <p className='font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                        </div>
                    </div>
                </div>

                {/* barChart */}
                <div className="flex flex-col items-center justify-center w-full h-full px-10 py-20 text-gray-700 ">
                    <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
                        <h2 className="text-xl font-bold">Meeting Quality</h2>
                        <span className="text-sm font-semibold text-gray-500">2023</span>
                        <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">

                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Average</span>
                                <div className="relative flex justify-center w-full h-10 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-8 bg-green-300"></div>
                                <div className="relative flex justify-center w-full h-20 bg-green-400"></div>
                                <span className="absolute bottom-0 text-xs font-bold">May</span>
                            </div>
                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Good</span>
                                <div className="relative flex justify-center w-full h-12 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-8 bg-green-300"></div>
                                <div className="relative flex justify-center w-full h-24 bg-green-400"></div>
                                <span className="absolute bottom-0 text-xs font-bold">Jun</span>
                            </div>
                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Excellent</span>
                                <div className="relative flex justify-center w-full h-12 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-16 bg-green-300"></div>
                                <div className="relative flex justify-center w-full h-20 bg-green-400"></div>
                                <span className="absolute bottom-0 text-xs font-bold">Jul</span>
                            </div>
                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Good</span>
                                <div className="relative flex justify-center w-full h-12 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-10 bg-green-300"></div>
                                <div className="relative flex justify-center w-full h-24 bg-green-400"></div>
                                <span className="absolute bottom-0 text-xs font-bold">Aug</span>
                            </div>
                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Excellent</span>
                                <div className="relative flex justify-center w-full h-12 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-10 bg-green-300"></div>
                                <div className="relative flex justify-center w-full h-32 bg-green-400"></div>
                                <span className="absolute bottom-0 text-xs font-bold">Sep</span>
                            </div>
                            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">Excellent</span>
                                <div className="relative flex justify-center w-full h-12 bg-green-200"></div>
                                <div className="relative flex justify-center w-full h-12 bg-green-300"></div>
                                <div className="relative flex justify-center w-full bg-green-400 h-28"></div>
                                <span className="absolute bottom-0 text-xs font-bold">Oct</span>
                            </div>
                        </div>
                        <div className="flex w-full mt-3">
                            <div className="flex items-center ml-auto">
                                <span className="block w-4 h-4 bg-green-400"></span>
                                <span className="ml-1 text-xs font-medium">Overall</span>
                            </div>
                            <div className="flex items-center ml-4">
                                <span className="block w-4 h-4 bg-green-300"></span>
                                <span className="ml-1 text-xs font-medium">Video</span>
                            </div>
                            <div className="flex items-center ml-4">
                                <span className="block w-4 h-4 bg-green-200"></span>
                                <span className="ml-1 text-xs font-medium">Audio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetingQuality;