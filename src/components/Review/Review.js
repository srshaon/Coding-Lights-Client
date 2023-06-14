import './Review.css';

import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, name, auth } = useAuth();
    const onSubmit = data => {


        console.log(data);

        fetch('https://coding-lights.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Rating Submitted Successfully');

                    reset();
                }

            })
    };
    const imageUrl = user?.photoURL || 'https://i.ibb.co/X4s5CGp/download.png'
    // console.log(user?.photoURL);
    return (
        <div>
            <h4 className="white-text-black-background pt-1 pb-2 m-0">Please Share Your Valuable Opinion With Us</h4>
            <div className="review-section" >

                <div >
                    <form className="review-form pt-4 w-100" onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />

                        <br />
                        <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}

                        <textarea maxLength="300" className="m-0" placeholder="Your Valuable Opinion(max 300 characters)" defaultValue="" {...register("review")} />

                        <br />
                        <input type="number" min="0" max="5" placeholder="Rating(Out of 5)" defaultValue="" {...register("rating", { required: true })} />
                        <br />

                        {errors.rating && <span className="error">This field is required</span>}
                        <input className="review-submit-input" style={{ padding: '2px', fontWeight: '800', border: '2px solid black' }} type="submit" />

                        <input placeholder="" style={{ display: 'none' }} defaultValue={imageUrl} {...register("photourl")} />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;