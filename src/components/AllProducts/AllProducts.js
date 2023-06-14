import './AllProducts.css';
import ScrollAnimation from 'react-animate-on-scroll';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//animate__backInUp animate__rotateOut animate__flipInY animate__backInUp animate__fadeInUp
const AllProducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://coding-lights.onrender.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div className="products-section">


            <h4 className="py-2 all-products-section-header d-flex justify-content-center animate__animated animate__pulse animate__infinite infinite">Select From Our Wide Range of Products </h4>


            <div className="all-products-section ">
                {
                    allproducts.map(product => <div className="container text-start "
                        key={product._id}>

                        <div className="row single-product-card-row h-100 ">

                            <div className="col d-flex justify-content-between flex-column m-0 p-0 mx-2 single-product-card h-100 ">


                                <ScrollAnimation delay={200}
                                    animateIn='fadeInRight'
                                >
                                    <div className="">
                                        <div className="single-product-card-image-div">
                                            <img src={product.img} alt="" className="w-100 img-fluid" />
                                        </div>
                                        <h6 className="px-1 pt-2">Product Name:<strong> {product.name}</strong></h6>
                                        <h6 className="px-1">Price: <strong>{product.price}</strong> Tk</h6>
                                        <div>

                                            <p className="single-product-card-description px-1">  {product.description}</p>
                                        </div>

                                    </div>
                                </ScrollAnimation>
                                <div className="order-btn-div pb-1">
                                    <Link to={`/order/${product._id}`} >
                                        <button className="mb-3 px-3 order-btn "><strong>Order Now</strong></button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;