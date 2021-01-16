import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = (props) => {
    const { img, title, description } = props.service;
    return (
        <Link style={{color: 'black'}} to="/odder">
        <div className="row service-box">
          
            <div className="col-sm-12 col-md-4 col-lg-6 col-xl-4 service d-flex flex-wrap">
                <div className="img-box d-flex justify-content-center">
                    <img src={img} alt="" />
                </div>
                <div className="content-box">
                    <h5>{title}</h5>
                    <small>{description}</small>
                    
                </div>
            </div>
            
        </div>
        </Link>
    );
};

export default ServiceItem;