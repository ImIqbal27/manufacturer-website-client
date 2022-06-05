import React from 'react';
import banner from '../../image/banner.jpg';

const Banner = () => {

    return (
        <div className="hero min-h-screen" style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} >

            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-1 text-3xl text-white font-bold">We Provide Computers , Laptops, PCs accesories .</h1>
                    <p className="mb-2">Hardware Point has taken care of its customers since the beginning. No matter if someone is inquiring or purchasing; every customer wants to get a genuine product with the best price.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;