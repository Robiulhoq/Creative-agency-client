import React from 'react';
import './Company.css';
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import uber from "../../../images/logos/uber.png";
const Company = () => {
    return (
        <div className="grid-container">
            <div className="item"><img src={slack} alt=""/></div>
            <div className="item"><img src={google} alt=""/></div>
            <div className="item"><img src={netflix} alt=""/></div>
            <div className="item"><img src={uber} alt=""/></div>
            <div className="item"><img src={uber} alt=""/></div>
        </div>
    );
};

export default Company;