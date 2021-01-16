import React from 'react';
import './Service.css';
import data from "../../../components/Data/courseDatta.json";
import ServiceItem from '../ServiceItem/ServiceItem';
const Service = () => {


    return (
        <div className="container">
            <h3>Provide awesome <span className="text-success">service</span></h3>
           {
               data.map(service => <ServiceItem service={service}></ServiceItem>)
           }
        </div>
    );
};

export default Service;