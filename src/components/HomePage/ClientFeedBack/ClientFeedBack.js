import React, { useEffect, useState } from 'react';
import FeedBack from '../FeedBack/FeedBack';

const ClientFeedBack = () => {
    const [review, setReview] = useState([]);
    console.log(review);
    useEffect(() =>{
        fetch('http://localhost:4000/reviewList')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Clients <span className="text-success ">FeedBack</span></h2>
            {
                review.map(feedback => <FeedBack feedback={feedback}></FeedBack>)
            }
        </div>
    );
};

export default ClientFeedBack;