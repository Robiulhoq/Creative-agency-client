import React from 'react';
import './FeedBack.css';

const FeedBack = (props) => {
    const {name, companyName, img, review} = props.feedback;
    return (
        <div className="container review-box">
            <div className="row mb-5 review">
                <div className="col-md-3 col-sm-12 feed-box">
                    <div className="img-title">
                        <img className="img-fluid" src={img} alt="" />
                        <h6>{name} <br/>{companyName}</h6>
                    </div>
                   <small>{review}</small>
                </div>
                {/* <div className="col-md-3 feed-box">
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
                </div> */}
            </div>
        </div>
    );
};

export default FeedBack;