import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';

const MakeAdmin = () => {
    const [newLogin, setNewLogin] = useContext(UserContext);
    const [admin, setAdmin] = useState({
        name: '',
        email: ''
    });
    console.log(admin);
    const hendleBlur = (e) =>{
        const value = {...admin};
        value[e.target.name] = e.target.value;
        setAdmin(value);
    };
    const hendleSubmit = (e) =>{
        fetch('http://localhost:4000/addAdmin',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
        .then(res => {
            if(res){
                e.target.reset()
            }
        })
        e.preventDefault();
    };
    // testing
    const [makeAdmin, setMakeAdmin] = useState(false);
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
                setMakeAdmin(true)
            }
        })
     },[])
    return (
        <div className="row">
           <div className="row coustomer-odder-box">
                <div className="col-md-2">
                    <Admin></Admin>
                </div>
              {makeAdmin === true?  <div className="col-md-10">
                    <h2>Odder</h2>
                    <div className="odder-input">
                        <div className="col-md-6 input-fild">
                            <form action="" onSubmit={hendleSubmit}>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" name="name" onBlur={hendleBlur} placeholder="Your Name" required class="form-control" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="email" name="email" onBlur={hendleBlur} placeholder="Your Email Address" required class="form-control" />
                                </div>
                                <button type="submit" on className="btn btn-dark">Send</button>
                            </form>
                        </div>
                    </div>
                </div>: null}
            </div>
        </div>
    );
};

export default MakeAdmin;