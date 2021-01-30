import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import './AddService.css';

const AddService = () => {
    const [course, setCourse] = useState({
        name: '',
        description: '',
        img: ''
    })
    const hendleBlur = (e) => {
        const value = { ...course }
        value[e.target.name] = e.target.value;
        setCourse(value);
    }
    const hendleSubmit = (e) => {

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)

        })
        e.preventDefault()
        e.target.reset();
    }
    return (
        <div className="service-container">
            <div className="row">
                <div className="col-md-2">
                    <Admin></Admin>
                </div>
                <div className="col-md-10 ">
                    <div className="headding">
                        <h4>Add Service</h4>
                    </div>
                    <div className="addService">
                        <form action="" onSubmit={hendleSubmit}>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="name" onBlur={hendleBlur} placeholder="Course Name" required class="form-control" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="description" onBlur={hendleBlur} placeholder="Description" required class="form-control" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="img" onBlur={hendleBlur} placeholder="Upload Image url" required class="form-control" />
                            </div>
                            <button type="submit" on className="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;