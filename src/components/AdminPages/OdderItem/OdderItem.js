import React from 'react';
import './OdderItem.css';

const OdderItem = (props) => {
    const { name, email, service, details } = props.item;
    return (
        <section className="item">
            <div className=" single-item">
            <div className="ml-5 mt-5 d-flex justify-content-between">
                <td>{name}</td>
                <td className="text-center">{email}</td>
                <td>{service}</td>
                <td className="details">{details}</td>
            </div>
            </div>
        </section>
    );
};

export default OdderItem;