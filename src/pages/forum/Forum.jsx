import React from 'react';
import forum from '../../assets/forum.jpg'

const Forum = () => {
    return (
        <div>
            <div className='lg:w-[50%] mx-auto'>
                <img src={forum} className='w-full' alt="forum" />
            </div>
            <h5 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl my-5 px-5'>
                Forum for Engaging Conversations
            </h5>
        </div>
    );
};

export default Forum;