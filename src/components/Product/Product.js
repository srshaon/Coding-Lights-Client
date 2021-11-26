import './Product.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, description, price, _id } = props.product;
    return (
        <div data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="1800" >
            <div className="container pt-5 h-100 ">
                <div className="row  single-product-card-row h-100">
                    <div className="col text-start d-flex justify-content-between flex-column m-0 p-0 mx-2 single-product-card">

                        <div className="">
                            <div className="single-product-card-image-div">
                                <img src={img} alt="" className="w-100 img-fluid" />
                            </div>
                            <h6 className="product-name pt-2">Product Name:<strong> {name}</strong></h6>
                            <h6 className="product-price">Price: <strong>{price}</strong> Tk</h6>
                            <div>

                                <p className="px-5 single-product-card-description">  {description}</p>
                            </div>
                        </div>
                        <div className="order-btn-div pb-1">
                            <Link to={`/order/${_id}`} >
                                <button className="mb-3 px-5 order-btn "><strong>Order Now</strong></button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;