import React from 'react';
import './ServiceeOdder.css';

const ServiceOdder = (props) => {
    const {price, service, details} = props.item;
    return (
        <div className="row odder-item">
            <div className="col-md-6 odder">
            <h6>{service}</h6>
            <p>Price ${price}</p>
            <small>{details}</small>
            </div>
            
           
        </div>
    );
};

export default ServiceOdder;