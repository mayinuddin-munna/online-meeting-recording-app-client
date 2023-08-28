import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTab = () => {
    const [tab, setTab] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch("tabs.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTab(data);
            })
    }, []);

    return (
        <div className=" mt-20 container mx-auto mb-10">
            <Tabs>

                {/* Todo: border green is not working */}
                <TabList className='text-center text-2xl border-b-2 border-transparent flex space-x-4 mb-10'>
                    {tab.map((item) => (
                        <Tab
                            key={item._id}
                            onClick={() => setActiveTab(item._id)}
                            className={`w-1/2 md:w-1/4 lg:w-1/5 ${activeTab === item._id ? "border-b-2 border-green-500 outline-none" : ""
                                }`}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </TabList>



                {tab.map((item) => (
                    <TabPanel key={item._id}>
                        {/* Content for each tab */}
                        <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row mb-5">
                            <div className="ms-5 ">
                                <h1 className="text-5xl font-bold mb-4 md:text-3xl lg:text-5xl text-center">
                                    {item.title}
                                </h1>
                                <p className="text-left leading-9 text-2xl md:text-xl text-slate-600 ms-5 me-5 lg:block">
                                    {item.content}
                                </p>
                            </div>
                            {/* TODO: margin bottom  */}
                            <div className="sm:mb-4">
                                <img className="w-[400px] h-[400]" src={item.img} alt="" />
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>

    );
};

export default ReactTab;
