import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h4>Let's handle your <br /> project, Professionally</h4>
                        <small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</small>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                        <div class="input-group-lg">
                            <input type="email" class="form-control mt-5" placeholder="Your Email Address" aria-describedby="inputGroup-sizing-lg" />
                            <input type="text" class="form-control mt-4" placeholder="Your Name/Company's name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            <textarea name="Your massage" placeholder="Your massage"  class="form-control mt-4" id="" cols="75" rows="10"></textarea>
                            <input type="submit" className="btn btn-dark mt-2" value="send"/>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;