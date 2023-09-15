import React from 'react';

const Analytics = () => {
    return (
        <section className="w-full flex overflow-x-hidden">
            <div className="relative w-full">
                <div className="px-4 md:px-6 mx-auto w-full -mt-24">
                    <div className="flex flex-wrap">

                        <div className="w-full xl:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white">
                                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h6 className="uppercase mb-1 text-xs font-semibold text-blueGray-500">Performance</h6>
                                            <h2 className="text-xl font-semibold text-blueGray-800">Total orders</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                <div className="px-6 py-4 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-bold text-lg text-blueGray-700">Page visits</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Page name</th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Visitors</th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Unique Users</th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Bounce Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">/</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">4,569</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">340</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><i className="fas fa-arrow-up mr-2 text-emerald-500"></i>46,53%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">/Home</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,985</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">319</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><i className="fas fa-arrow-down mr-2 text-orange-500"></i>46,53%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">/features</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,513</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">294</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><i className="fas fa-arrow-down mr-2 text-orange-500"></i>36,49%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">/meetup</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">2,050</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">147</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><i className="fas fa-arrow-up mr-2 text-emerald-500"></i>50,87%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">/profile</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">1,795</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">190</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><i className="fas fa-arrow-up mr-2 text-green-500"></i>46,53%</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                <div className="px-6 py-4 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-bold text-lg text-blueGray-700">Social traffic</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Referral</th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">Visitors</th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">Facebook</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">1,480</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">60%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" style={{ width: "60 %" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">Facebook</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">5,480</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">70%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500" style={{ width: "70%" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">Google</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">4,807</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">80%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500" style={{ width: "80%" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">Instagram</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,678</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">75%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500" style={{ width: " 75%" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center"><span className="ml-3 font-bold NaN">Twitter</span></div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">2,645	</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">30%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-amber-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500" style={{ width: "30%" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer className="block py-4">
                        <div className="container mx-auto px-4">
                            <div className="mb-4 border-b-1 border-blueGray-200">
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-4/12 px-4">
                                        <div className="text-center mb-2 md:text-left md:mb-0"><a href="https://www.creative-tim.com/?ref=npr-footeradmin" target="_blank" className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">Copyright © 2021 Creative Tim</a></div>
                                    </div>
                                    <div className="w-full md:w-8/12 px-4">
                                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                            <li><a href="https://www.creative-tim.com?ref=npr-footeradmin" target="_blank" className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Creative Tim</a></li>
                                            <li><a href="https://www.creative-tim.com/presentation?ref=npr-footeradmin" target="_blank" className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">About Us</a></li>
                                            <li><a href="https://www.creative-tim.com/blog/?ref=npr-footeradmin" target="_blank" className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Blog</a></li>
                                            <li><a href="https://www.creative-tim.com/license?ref=npr-footeradmin" target="_blank" className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3">Licenses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer> */}

                </div>
            </div>
        </section>
    );
};

export default Analytics;