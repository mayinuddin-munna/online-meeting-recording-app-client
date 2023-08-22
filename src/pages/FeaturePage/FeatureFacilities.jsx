import React from "react";

const FeatureFacilities = () => {
  return (
    <section className="grid grid-cols-4 justify-items-center bg-white text-black p-24 ">
      <div
        className="w-8/12 p-4 lg:p-8 shadow-xl text-center
            rounded-md bg-gradient-to-t from-blue-100 to-cyan-100"
      >
        <h1 className="font-semibold text-3xl mb-2">Maximum Engagement</h1>
        <p className="">We ensure maximum engagement to our users.</p>
      </div>
      <div
        className="w-8/12 p-4 lg:p-8 shadow-xl text-center
            rounded-md bg-gradient-to-t from-blue-100 to-cyan-100"
      >
        <h1 className="font-semibold text-3xl mb-2">Simple and Easy to Use</h1>
        <p className="">Simple features makes it easier to use.</p>
      </div>
      <div
        className="w-8/12 p-4 lg:p-8 shadow-xl text-center
            rounded-md bg-gradient-to-t from-blue-100 to-cyan-100"
      >
        <h1 className="font-semibold text-3xl mb-2">
          Instant Video Conference
        </h1>
        <p className="">
          Instant Video collaboration with your team anywhere at anytime.
        </p>
      </div>
      <div
        className="w-8/12 p-4 lg:p-8 shadow-xl text-center
            rounded-md bg-gradient-to-t from-blue-100 to-cyan-100"
      >
        <h1 className="font-semibold text-3xl mb-2">Reliable and Flexible</h1>
        <p className="">Offering flexible and reliable service to our users.</p>
      </div>
    </section>
  );
};

export default FeatureFacilities;
