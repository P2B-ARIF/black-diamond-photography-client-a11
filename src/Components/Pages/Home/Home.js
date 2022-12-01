import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import GoodStory from './GoodStory/GoodStory';
import Hero from './Hero/Hero';
import HomeServices from './HomeServices/HomeServices';
import Portfolio from './Portfolio/Portfolio';
import useTitle from './../../Shared/TitleHook/useTitle';

const Home = () => {
    useTitle(`Home | Black Diamond Photography`)

    return (
        <div>
            <Hero/>
            <HomeServices/>
            <Portfolio/>
            <GoodStory/>
            <Footer/>
        </div>
    );
};

export default Home;