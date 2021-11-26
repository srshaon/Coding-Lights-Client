import './AllReviews.css';

import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://damp-citadel-82174.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)

            })



    }, [])

    if (reviews.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="pb-3" style={{ backgroundColor: '#a6a8a8' }} >
            <h4 className="py-2 review-section-header">Our Happy Clients</h4>
            <div style={{ background: '#a6a8a8', color: 'white' }} className="review-container">
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    >

                    </SingleReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;