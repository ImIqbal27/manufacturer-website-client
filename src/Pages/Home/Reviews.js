import React from 'react';
import quote from '../../image/quote.svg';
import people1 from '../../image/people1.png';
import people2 from '../../image/people2.png';
import people3 from '../../image/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Herry',
            comment: 'good product.good product.good product.good product',
            location: 'Dhaka',
            img: people1
        },
        {
            _id: 2,
            name: 'Wilson Herry',
            comment: 'good product.good product',
            location: 'Chattogram',
            img: people2
        },
        {
            _id: 3,
            name: 'Wilson Herry',
            comment: 'good product.good product.good product',
            location: 'Coxsbazar',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='items-center'>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 w-24' alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    reviews.map(review =>
                        <Review key={review._id} review={review}></Review>
                    )
                }

            </div>
        </section>
    );
};

export default Reviews;