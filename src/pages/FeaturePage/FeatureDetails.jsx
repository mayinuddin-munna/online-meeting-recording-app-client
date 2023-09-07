import React from 'react';

const FeatureDetails = ({ features, index }) => {

    const { image, name, info } = features;
    console.log(index);

    return (
        <section className="sm:py-16 lg:py-32">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="grid justify-center items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                    <div>
                        <img className="object-cover w-full" src={image} alt="" />
                    </div>

                    <div className={`text-center ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{name}</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">{info}</p>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default FeatureDetails;