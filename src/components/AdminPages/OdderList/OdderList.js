import React, { useContext, useEffect, useState } from 'react';
import './OdderList.css';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';
import OdderItem from '../OdderItem/OdderItem';

const OdderList = () => {
    const [newLogin, setNewLogin] = useContext(UserContext);
    const [odder, setOdder] = useState([]);
    const email = newLogin.email;
    console.log(email);
    useEffect(() =>{
        fetch('http://localhost:4000/clientOdder',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => setOdder(data))
    },[])
    return (
        <div className="row main-container">
            <div className="col-md-2">
            <Admin></Admin>
            </div>
            <div className="col-md-10 clientOdder">
                        <tr className=" d-flex justify-content-between">
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Service</th>
                            <th>Details</th>

                        </tr>
                        {
                            odder.map(item => <OdderItem item={item}></OdderItem>)
                        }
          
            </div>
        </div>
    );
};

export default OdderList;