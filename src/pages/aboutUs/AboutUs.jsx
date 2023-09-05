import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        fetch("about.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAboutUs(data); // Set the fetched data into the state 
            })
    }, []);

    return (
        <div className='my-16'>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/1617b396-cd26-48b3-a56b-6891c536052c/q278NspvNG.json"
                    className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[450px]
                 w-[350px]"
                >
                    <Controls
                        visible={!true}
                        buttons={["play", "repeat", "frame", "debug"]}
                    />
                </Player>
            </div>

            <h5 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl my-5 px-5'>
                The People Behind <br className='md:hidden' /> Galaxy Meet
            </h5>
            <section>
                <div className="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {/* Feature 1 */}
                    {aboutUs.map((about, index) => (
                        <div
                            key={index}
                            className={`bg-slate-200  py-10 selection:rounded-lg shadow-md flex flex-col md:flex-row justify-center gap-5 rounded-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className=' flex items-center ' >
                                <img
                                    src={about.image}
                                    alt={about.name}
                                    className="w-32 h-32  rounded-full "
                                />
                            </div>

                            {/* Content */}
                            <div className="text-left w-1/2">
                                <div className=" flex items-center gap-5 justify-center pt-10">

                                    <h3 className="text-4xl font-semibold mb-2 ">

                                        {about.name}</h3>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    {about.position}
                                </p>

                                <div className="flex flex-col md:flex-row justify-center mx-auto gap-5">
                                    <Link>
                                        {about.detail}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* MdMedicalServices */}

                </div>
            </section>
        </div>
    );
};

export default AboutUs;