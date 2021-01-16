import React from 'react';
import './HomeHeader.css';
import headerImg from '../../../images/logos/Frame.png';
const HomeHeader = () => {
    return (
        <div className="container">
           <div className="row">
               <div className="col-md-6 col-sm-6">
               <div className="top-heading">
               <h2>Let's Gorw Your</h2>
               <h2>Brand To The</h2>
               <h2>Next Level</h2>
               </div>
               <div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat <br/> facilis in nisi vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptatem.</p>
               <button className="btn btn-dark">Hire Us</button>
               </div>
               </div>
               <div className="col-md-6 col-sm-6  d-flex align-items-center img-container">
                   <img className="img-fluid" src={headerImg} alt=""/>
               </div>
           </div>
        </div>
    );
};

export default HomeHeader;