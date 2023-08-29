import React from 'react';

const UserGrowth = () => {
    return (
        <section className="my-10 lg:my-36">
            <div className="container grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between p-6 mx-auto sm:py-12 lg:py-24 ">


                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold sm:text-6xl">
                        Trusted By Users Everywhere
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">

                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join Us Now</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Login</a>
                    </div>
                </div>

                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img src="https://i.ibb.co/N2wTm98/Galaxy-Meet-Banner.png" alt="" className="object-cover" />
                </div>
            </div>
        </section>

    );
};

export default UserGrowth;