import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <h1>Error Page <span>Go to <Link className='text-2xl font-semibold text-blue-500'>Home</Link></span></h1>
        </div>
    );
};

export default Error;