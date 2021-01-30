import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceItem from '../ServiceItem/ServiceItem';
const Service = () => {
const [service, setServive] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/serviceList')
        .then(res => res.json())
        .then(data => setServive(data) )
    },[])

    return (
        <div className="container">
            <h3>Provide awesome <span className="text-success">service</span></h3>
           {
               service.map(service => <ServiceItem service={service}></ServiceItem>)
           }
        </div>
    );
};

export default Service;