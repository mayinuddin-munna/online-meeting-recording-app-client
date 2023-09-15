import React from 'react';
import MeetingQuality from './MeetingQuality/MeetingQuality';


const MeetingData = () => {
    return (
        <div className='py-16 lg:py-20'>
            <h2 className='text-5xl text-center font-semibold text-white'>Meeting Analytics</h2>
            <MeetingQuality></MeetingQuality>
            

        </div>
    );
};

export default MeetingData;