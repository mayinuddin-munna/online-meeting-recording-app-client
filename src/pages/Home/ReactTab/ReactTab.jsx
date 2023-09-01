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
      });
  }, []);

  // TODO: responsive for small device
  return (
    <div className=" mt-20 container mx-auto mb-10 h-[70vh]">
      <Tabs>
        <TabList className="text-center text-xl border-b-2 border-transparent flex space-x-4 overflow-x-auto mb-10">
          {tab.map((item) => (
            <Tab
            key={item._id}
            onClick={() => setActiveTab(item._id)}
            className={`px-3 py-1 md:w-1/4 lg:w-1/5 uppercase cursor-pointer rounded transition duration-300 ${
              activeTab === item._id
                ? "bg-[#5EC38B] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-[#5EC38B] hover:text-white"
            }`}
          >
            {item.name}
          </Tab>
          ))}
        </TabList>

        {tab.map((item) => (
          <TabPanel key={item._id}>
            <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row mb-5">
              <div className="ms-5 me-5 md:w-1/2">
                <h1 className="text-5xl font-bold mt-5 mb-4 md:text-3xl lg:text-5xl text-center">
                  {item.title}
                </h1>
                <p className="text-left leading-9 text-2xl md:text-xl text-slate-600 ms-5 me-5 lg:block">
                  {item.content}
                </p>
              </div>
              <div className="w-1/2">
              <img className="w-full h-[50%] object-cover" src={item.img} alt="" />
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ReactTab;
