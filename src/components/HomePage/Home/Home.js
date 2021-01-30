import React from 'react';
import './Home.css'
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeNav from '../HomeNav/HomeNav';
import Company from '../Company/Company';
import Service from '../Service/Service';
import OurWork from '../OurWork/OurWork';
import Contact from '../Contact/Contact';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';


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
            {/* <FeedBack></FeedBack> */}
            <ClientFeedBack></ClientFeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;