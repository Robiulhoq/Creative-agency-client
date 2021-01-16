import React from 'react';
import './Home.css'
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeNav from '../HomeNav/HomeNav';
import Company from '../Company/Company';
import Service from '../Service/Service';
import OurWork from '../OurWork/OurWork';
import FeedBack from '../FeedBack/FeedBack';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <section className="hometop-container">
            <HomeNav></HomeNav>
            <HomeHeader></HomeHeader>
            </section>
            <Company></Company>
            <Service></Service>
            <OurWork></OurWork>
            <FeedBack></FeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;