import React from 'react';
import OdderMain from '../OdderMain/OdderMain';

const ClientReview = () => {
    return (
        <div className="row coustomer-odder-box">
            <div className="col-md-2">
                <OdderMain></OdderMain>
            </div>
            <div className="col-md-10">
                <h2>Review</h2>
                <div className="odder-input">
                    <form action="">
                        <div className="col-md-6 input-fild">
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="name" placeholder="Your Name" required class="form-control" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="name" placeholder="Company Name" required class="form-control" />
                            </div>
                            <textarea name="details" placeholder="Your Review" required class="form-control mt-4" id="" cols="55" rows="5"></textarea> <br/>
                            <button type="submit" className="btn btn-dark">submit</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ClientReview;