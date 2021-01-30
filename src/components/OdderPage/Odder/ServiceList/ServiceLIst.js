import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ServiceOdder from '../../ServiceOdder/ServiceOdder';
import OdderMain from '../OdderMain/OdderMain';



const ServiceLIst = () => {
    const [newLogin, setNewLogin] = useContext(UserContext);
    const email = newLogin.email;
    const [odder, setOdder] = useState([]);
    console.log(odder.length);
    console.log(odder);

    
        useEffect(() => {
        fetch('http://localhost:4000/odderList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setOdder(data));

        }, []);
  




    return (
        <div className="row coustomer-odder-box">
            <div className="col-md-2">
                <OdderMain></OdderMain>
            </div>
            <div className="col-md-10">
                <h2>Service</h2>
                <div className="odder-input">
                    
                    {
                      odder.map(item => <ServiceOdder item={item}></ServiceOdder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceLIst;