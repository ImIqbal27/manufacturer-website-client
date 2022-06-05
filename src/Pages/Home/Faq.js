import React from 'react';

const Faq = () => {
    return (
        <div className='flex '>

            <div className='w-8/12 px-24 py-24'>
                <h2 className='text-secondary text-3xl'>Frequently Asked Questions</h2>
                <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  ">
                    <div className="collapse-title text-xl font-medium ">
                        What we produce ?
                    </div>
                    <div className="collapse-content">
                        <p>We produce PCs laptop computer accesories like air cooler , SSD , Ram , Rom , Mouse etc.</p>
                    </div>
                </div>
                <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium ">
                        What is our payment system ?
                    </div>
                    <div className="collapse-content">
                        <p>For payment we use MasterCard , Bkash and Nagad</p>
                    </div>
                </div>
                <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are our refund policy ?
                    </div>
                    <div className="collapse-content">
                        <p>Our refund policy is very easy .Our refund policy is very easy . </p>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Faq;