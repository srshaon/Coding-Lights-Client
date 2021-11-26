import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import './SingleReview.css'
import ScrollAnimation from 'react-animate-on-scroll';
const SingleReview = (props) => {


    const { _id, name, review, rating, photourl } = props.review;


    let starNumber = 0;
    return (
        <ScrollAnimation delay={100}
            animateIn='fadeInUp'>
            <div className="review-inner-container h-100 mx-5" style={{ background: '#2b2c2cd7' }}>
                <div className="review-section-image" >
                    <img style={{ borderRadius: '50%' }} className="img-fluid" src={photourl} alt="" />

                </div>
                <div className="h-100" style={{ background: '#2b2c2cd7', borderRadius: '10px' }}>
                    <div>
                        <div>
                            <h6>Name: {name}</h6>
                            <div>
                                Rating: {[...Array(5)].map((star, i) => {
                                    starNumber += 1;
                                    return <label key={i}>
                                        <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                                        <FaStar color={starNumber <= rating ? "yellow" : "grey"} />
                                    </label>
                                })}

                            </div>


                        </div>
                        <p >“{review}”</p>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default SingleReview;
