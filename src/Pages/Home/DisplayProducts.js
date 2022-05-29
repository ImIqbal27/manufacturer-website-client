import React, { useEffect, useState } from 'react';
import Product from './Product';

const DisplayProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h3 className='text-xl text-secondary text-center'> Products </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    products.map(product => <Product key={product._id}
                        product={product}
                    ></Product>)

                }

            </div>

        </div>
    );
};

export default DisplayProducts;