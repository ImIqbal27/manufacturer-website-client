import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-lake-70100.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <small>Manage Products</small>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{<img src={product.image} className='w-24' alt="photo" />}
                                    </td>
                                    <td className='font-bold'>{product.name}</td>
                                    <td><button className='btn btn-xs'>Update</button></td>
                                    <td><button className='btn btn-xs'>Delete</button></td>

                                </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;