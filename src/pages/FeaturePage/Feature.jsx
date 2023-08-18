import React from 'react';
import "./Feature.css"
import FeatureBanner from './FeatureBanner';
import FeatureFacilities from './FeatureFacilities';

const Feature = () => {
    return (
        <div>
            <FeatureBanner></FeatureBanner>
            <FeatureFacilities></FeatureFacilities>

        </div>
    );
};

export default Feature;