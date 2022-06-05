import React from 'react';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const product_name = event.target.product_name.value;
        const image_url = event.target.image_url.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const available = event.target.available.value;
        const min_order_quantity = event.target.min_order_quantity.value;

        console.log(product_name, image_url, description, price, available, min_order_quantity);
        const productDetails = { product_name, image_url, description, price, available, min_order_quantity };
        const serverApi = ``;

        fetch(serverApi, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });

    }

    return (
        <div>
            <small>Add Product</small>

            <div className='px-96'>
                <form onSubmit={handleAddProduct}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name </span>
                        </label>
                        <input type="text" name='product_name' placeholder="Type here product name" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                    </div>
                    {/* //////////////////////// */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name='image_url' placeholder="Type here image URL" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                    </div>
                    {/* //////////////////// */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Type here description" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                    </div>
                    {/* ///////////////////// */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Unit Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Type here unit price" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                    </div>
                    {/* ///////////////////// */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Total Product Available</span>
                        </label>
                        <input type="number" name='available' placeholder="Type here total product available" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                    </div>
                    {/* ///////////////////// */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input type="number" name='min_order_quantity' placeholder="Type here minimum order quantity" className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">  { }  </span>
                        </label>
                        <input className='btn btn-primary' type="submit" value="Add Product" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;