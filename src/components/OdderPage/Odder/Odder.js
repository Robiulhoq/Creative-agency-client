import React, { useState } from 'react';
import './Odder.css';
import OdderMain from './OdderMain/OdderMain';

const Odder = () => {
    const [odder, setOdder] = useState({
        name: '',
        email: '',
        service: '',
        details: '',
        price: ''
    });
    
    const hendleBlur = (e) => {
        
        const value = { ...odder }
        value[e.target.name] = e.target.value;
        setOdder(value)
    };
    const hendleFormSubmit = (e) =>{
        fetch('http://localhost:4000/customerOdder',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(odder)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data){
                alert("form submit success")
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <div className="row coustomer-odder-box">
                <div className="col-md-2">

                    <OdderMain></OdderMain>
                </div>
                <div className="col-md-10">
                    <h2>Odder</h2>
                    <div className="odder-input">
                        <div className="col-md-6 input-fild">
                            <form action="" onSubmit={hendleFormSubmit}>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" name="name" onBlur={hendleBlur} placeholder="Your Name/Company Name" required class="form-control" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="email" name="email" onBlur={hendleBlur} placeholder="Your Email Address" required class="form-control" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" name="service" onBlur={hendleBlur} placeholder="Graphic design" required class="form-control" />
                                </div>
                                <textarea name="details" placeholder="Project details" onBlur={hendleBlur} required class="form-control mt-4" id="" cols="55" rows="5"></textarea>
                                <br />
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" name="price" placeholder="Price" onBlur={hendleBlur} required class="form-control" /> <br />

                                </div>
                                <button type="submit" on className="btn btn-dark">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Odder;