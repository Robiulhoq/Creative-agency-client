import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Admin = () => {
    const [newLogin, setNewLogin] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const email = newLogin.email;
 useEffect(() =>{
    fetch('http://localhost:4000/clientOdder',{
        method: 'POST',
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
        
    })
    .then(res => {
        if(res){
            setAdmin(true)
        }
    })
 },[]);

//  testing
// const [admin, setAdmin] = useState(false);
//     const email = newLogin.email;
//     useEffect(() =>{
//         fetch('http://localhost:4000/clientOdder',{
//             method: 'POST',
//             headers:{ 
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email})
            
//         })
//         .then(res => {
//             if(res){
//                 setAdmin(true)
//             }
//         })
//      },[])
    return (
        <div className="row">
            <div className="col-md-2" style={{width: 100}}>
            <h2>LOGO HEAR</h2>
               {admin === true? <Link className="link-style" to="/odderList">Odder List</Link>
               : <Link className="link-style" to="/odder">Odder</Link>
               }
                <br />
                {admin === true? 
                <Link className="link-style" to="/addService">Add Service</Link>:
                <Link className="link-style" to="/service">Service</Link>
                }
                <br />
                {admin === true?
                    <Link className="link-style" to="/MakeAdmin">Make Admin</Link>:
                    <Link className="link-style" to="/review">Review</Link>}
            </div>
        </div>
    );
};

export default Admin;