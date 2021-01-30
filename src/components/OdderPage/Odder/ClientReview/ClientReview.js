import React, { useState } from 'react';
import OdderMain from '../OdderMain/OdderMain';

const ClientReview = () => {
    const [review, setReview] = useState({
        name:'',
        companyName:'',
        img: '',
        review: ''
    });
    
    const hendleBlur = (e) =>{
        const value ={...review};
        value[e.target.name] = e.target.value;
        setReview(value);
    };
    const hendleSubmit = (e) =>{
        fetch('http://localhost:4000/clientReview',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => {
            if(res){
                e.target.reset();
            }
        })
        
        e.preventDefault()
    }
    return (
        <div className="row coustomer-odder-box">
            <div className="col-md-2">
                <OdderMain></OdderMain>
            </div>
            <div className="col-md-10">
                <h2>Review</h2>
                <div className="odder-input">
                    <form onSubmit={hendleSubmit}>
                        <div className="col-md-6 input-fild">
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="name" onBlur={hendleBlur} placeholder="Your Name" required class="form-control" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="companyName"  onBlur={hendleBlur}  placeholder="Company Name" required class="form-control" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="img"  onBlur={hendleBlur}  placeholder="Upload Image" required class="form-control" />
                            </div>
                            <textarea name="review" placeholder="Your Review"  onBlur={hendleBlur}  required class="form-control mt-4" id="" cols="55" rows="5"></textarea> <br/>
                            <button type="submit" className="btn btn-dark">submit</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ClientReview;