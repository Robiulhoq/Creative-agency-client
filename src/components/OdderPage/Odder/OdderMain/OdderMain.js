import React from 'react';
import './OdderMain.css';
import { Link } from 'react-router-dom';
const OdderMain = () => {
    return (
        <div className="row">
            <div className="col-md-2">
            <h2>LOGO HEAR</h2>
                <Link className="link-style" to="/odder">Odder</Link>
                <br />
                <Link className="link-style" to="/service">Service</Link>
                <br />
                <Link className="link-style" to="/review">Review</Link>
            </div>
        </div>
    );
};

export default OdderMain;