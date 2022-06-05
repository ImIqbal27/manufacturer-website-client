import React from 'react';
import Services from '../OurServices/Services';
import Banner from './Banner';
import DisplayProducts from './DisplayProducts';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';
import OurFactory from './OurFactory';
import Faq from './Faq';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='px-12'>
                <DisplayProducts></DisplayProducts>

            </div>
            <div>
                <Services></Services>
            </div>
            <div className='px-12'>
                <BusinessSummary></BusinessSummary>
                <OurFactory></OurFactory>
                <Faq></Faq>
                <Reviews></Reviews>
            </div>

        </div>
    );
};

export default Home;