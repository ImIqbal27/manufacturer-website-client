import React from 'react';
import banner from '../../image/banner.jpg';

const Banner = () => {

    return (
        <div class="hero min-h-screen" style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} >

            <div class="hero-overlay "></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl text-white font-bold">Hello there</h1>
                    <p class="mb-2">Hardware Point has taken care of its customers since the beginning. No matter if someone is inquiring or purchasing; every customer wants to get a genuine product with the best price.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;