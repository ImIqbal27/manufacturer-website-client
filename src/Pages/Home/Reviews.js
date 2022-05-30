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
            name: 'Robert Downey Jr',
            comment: 'Quick Delivery and good quality...they are awesome. Weren`t let in for no reason even after queuing again',
            location: 'Rajshahi',
            img: 'https://www.ed92.org/wp-content/uploads/2021/12/Robert-Downey-Jr.-780x585.jpg'
        },
        {
            _id: 2,
            name: 'Chris Hemsworth',
            comment: 'We had an issue with an appliance which took a lot of resolving with the suppliers.We are so of the hard work ,her to go the extra mile for us!',
            location: 'Chattogram',
            img: 'https://tvline.com/wp-content/uploads/2020/08/chris-hemsworth.jpg?w=620'
        },
        {
            _id: 3,
            name: 'Mark Ruffalo',
            comment: 'Good prompt service .This company such a gem so helpful.Excellent choice of binding machines and binders',
            location: 'Magura',
            img: 'https://image.tmdb.org/t/p/w200/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg'
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='items-center'>
                    <h4 className="text-xl text-primary font-bold">

                    </h4>
                    <h2 className="text-3xl">What Our Clients Say</h2>
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