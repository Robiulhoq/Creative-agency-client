import React from 'react';
import WorkSlider from '../WorkSlider/WorkSlider';
import './OurWork.css';
const OurWork = () => {
    return (
        <div className="work-container">
            <h2 className="text-white text-center pt-5 pb-5">Hear are some of <span className="text-success">our work</span></h2>
            <div className="slider-container">
                <WorkSlider></WorkSlider>
            </div>
        </div>
    );
};

export default OurWork;