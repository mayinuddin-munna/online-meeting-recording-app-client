import React, { useEffect, useState } from 'react';
import "./Feature.css"
import FeatureBanner from './FeatureBanner';
import FeatureFacilities from './FeatureFacilities';
import FeatureDetails from './FeatureDetails';

const Feature = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch("solutions.json")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setFeatures(data);
            })
    }, []);

    return (
        <div>
            <FeatureBanner></FeatureBanner>
            <FeatureFacilities></FeatureFacilities>
            <div >
                {
                    features.map((features, index) => <FeatureDetails
                        key={features._id}
                        features={features}
                        index={index}
                    ></FeatureDetails>)
                }
            </div>
        </div >
    );
};

export default Feature;