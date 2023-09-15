import React from 'react';
import MeetingQuality from './MeetingQuality/MeetingQuality';
import Analytics from './Analytics/Analytics';


const MeetingData = () => {
    return (
        <div className='px-4 lg:px-20 py-16 lg:py-20'>
            <h2 className='text-4xl lg:text-6xl text-center font-semibold text-white'>Meeting Analytics</h2>
            <MeetingQuality></MeetingQuality>
            <Analytics></Analytics>
        </div>
    );
};

export default MeetingData;