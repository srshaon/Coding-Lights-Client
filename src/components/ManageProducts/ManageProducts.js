import './ManageProducts.css';

import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://coding-lights.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleDelete = (id) => {
        // console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://coding-lights.onrender.com/products/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = products.filter(o => o._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className="pb-2">
            <h4 className="white-text-black-background py-1">Total Products: {products.length}</h4>
            <div>
                <div style={{ borderRadius: '10px' }} className="manage-all-products-section">
                    {
                        products.map(product => <div style={{ borderRadius: '10px' }} className="container text-start all-product-container"
                            key={product._id}>

                            <div style={{ borderRadius: '10px' }} className="row single-product-card-row h-100">
                                <div style={{ borderRadius: '10px' }} className="col d-flex justify-content-between flex-column m-2 p-0 single-product-card">

                                    <div style={{ borderRadius: '10px' }} className="">
                                        <div style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} className="single-product-card-image-div">
                                            <img src={product.img} alt="" className="w-100 img-fluid" />
                                        </div>
                                        <h6 className="px-1 pt-2">Product Name:<strong> {product.name}</strong></h6>
                                        <h6 className="px-1">Price: <strong>{product.price}</strong> Tk</h6>
                                        <div>

                                            <p className="single-product-card-description px-1">  {product.description}</p>
                                        </div>
                                    </div>
                                    <div className=" pb-4">
                                        <button style={{ border: '3px solid black' }} onClick={() => handleDelete(product._id)} className="w-100 delete-service-btn"><strong>Delete Product</strong> </button>
                                    </div>

                                </div>

                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;