import React, { useEffect, useState } from "react";
import Product from "./Product";
import PurchaseProductPage from "./PurchaseProductPage";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch(`https://shrouded-lake-70100.herokuapp.com/product`)
    // const url = `https://manufacturer-website-server-updated.vercel.app/product`;
    // const url = `https://manufacturer-website-server-updated-1x9g.vercel.app/product`;
    const url = `pro.json/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data), console.log("data--", data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-2xl text-secondary text-center">Our Products </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
