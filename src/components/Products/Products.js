import './Products.css';

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-citadel-82174.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (

        <div id="products" className="pb-2 products-section">
            <h4 className="py-2 products-section-header">Our Top Products</h4>

            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Products;