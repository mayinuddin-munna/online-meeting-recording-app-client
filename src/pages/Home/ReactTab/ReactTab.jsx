import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import videoCall from '../../../assets/video call.png'
const YourComponent = () => {
    return (
        <div className="container mx-auto mb-10">
            <Tabs>
                <TabList className='text-center mb-3'>
                    <Tab>Calling</Tab>
                    <Tab>Meeting</Tab>
                </TabList>

                <TabPanel>
                    {/* Content for Tab 1 */}
                    <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row mb-5 ">
                        <div className="ms-5">
                            <h1 className="text-5xl font-bold mb-4 md:text-3xl lg:text-5xl text-center">Connect with calling</h1>
                            <p className="text-left leading-9 text-2xl md:text-xl text-slate-600 ms-5 me-5   lg:block">
                                With our advanced calling technology, you can foster seamless communication across borders, time zones, and platforms. Whether it's team meetings, client presentations, or international conferences, our calling solution ensures crystal-clear audio and smooth video connections. Say goodbye to geographical limitations and hello to productive and efficient interactions.
                            </p>

                        </div>
                        <img className="w-[400px] h-[400]" src={videoCall} alt="" />
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Content for Tab 2 */}
                    <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row mt-8 mb-5 ">
                        <div className="ms-5">
                            <h1 className="text-5xl font-bold mb-4 md:text-3xl lg:text-5xl text-center">Meet from anywhere</h1>
                            <p className="text-left leading-9 text-2xl text-slate-600 ms-5 me-5 ">
                                Connect and collaborate seamlessly, no matter where you are. Our cutting-edge video conferencing technology empowers you to hold productive meetings and discussions from the comfort of your own space. Whether you're at the office, at home, or on the go, our platform ensures that you're always just a click away from meaningful interactions.
                            </p>


                        </div>
                        <img className="w-[400px] h-[400]" src='https://as1.ftcdn.net/v2/jpg/04/42/15/70/1000_F_442157068_ggmhQgo3HksGHbFQSrhtw0cwSm2J6dAN.jpg' alt="" />
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default YourComponent;
