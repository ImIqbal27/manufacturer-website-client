import React from 'react';

const AddReview = () => {
    const handleAddReview = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h2>Add review</h2>

            <div className='px-24'>
                <form onSubmit={handleAddReview}>

                    <div className="form-control w-full max-w-xs">

                        <div className="rating">  <span className="label-text ">Rating :  </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Comment</span>
                        </label>
                        <textarea className="textarea textarea-primary" name='comment' placeholder="Your comment..."></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name </span>
                        </label>
                        <input type="text" name='product_name' placeholder="Type here product name" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                        <button className='btn btn-primary'>Add Review</button>
                    </div>

                    {/* //////////////////////// */}

                </form>

            </div>
        </div>
    );
};

export default AddReview;