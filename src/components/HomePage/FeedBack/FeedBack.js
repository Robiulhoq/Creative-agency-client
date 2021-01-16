import React from 'react';
import './FeedBack.css';
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";

const FeedBack = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-5">Clients <span className="text-success ">FeedBack</span></h2>
            <div className="row mb-5">
                <div className="col-md-3 feed-box">
                    <div className="img-title">
                        <img className="img-fluid" src={customer1} alt="" />
                        <h6>Nasa  partik <br/>CEO</h6>
                    </div>
                   <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem?</small>
                </div>
                <div className="col-md-3 feed-box">
                    <div className="img-title">
                        <img src={customer2} alt="" />
                        <h6>Maream borron <br/>CEO </h6>
                    </div>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, modi.</small>
                </div>
                <div className="col-md-3 feed-box">
                    <div className="img-title">
                        <img src={customer3} alt="" />
                        <h6>Bria Malone <br/> CEO</h6>
                    </div>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, voluptatem!</small>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;