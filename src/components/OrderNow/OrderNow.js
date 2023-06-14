import './OrderNow.css'
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import React, { useEffect, useState } from 'react';


const BookNow = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, name, auth } = useAuth();
    const { _id } = useParams();
    const history = useHistory()
    const location = useLocation()
    const url = "/success"
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://coding-lights.onrender.com/products/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data)
            })
    }, [])
    const onSubmit = data => {

        const orderedproduct = product;
        data.order = orderedproduct;
        // console.log(data);

        fetch('https://coding-lights.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Placed Successfully');

                    reset();
                }
                history.push(url)
            })
    };
    return (
        <div style={{ backgroundColor: '#a6a8a8' }} className="product-details-container " >
            <div className="product-details-upper-section" >
                <h5 className="white-text-black-background py-1"><strong>"{product.name}"</strong></h5>
                <img className="img-fluid " src={product?.img} alt="" />
            </div>
            <div className="product-details-lower-section" >
                <div className="product-details-section" >
                    <h5 className="pb-4 pt-2 white-text-black-background" >Details of the Product:</h5>
                    <div className="p-0 m-0 product-inner-details-section" >
                        <div >
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Name: </p>
                                <p className="ps-2" style={{ textAlign: 'left' }}> {product?.name} </p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Description: </p>
                                <p className="ps-2" style={{ textAlign: 'left' }}>{product?.description}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Price: </p><p className="ps-2" style={{ textAlign: 'left' }}> {product?.price}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Colors: </p><p className="ps-2" style={{ textAlign: 'left' }}> {product?.colors}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Application Area: </p><p className="ps-2" style={{ textAlign: 'left' }}>{product?.applicationAreas}</p>

                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Operation Moods: </p><p className="ps-2" style={{ textAlign: 'left' }}>{product?.operationModes}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2 pt-1" style={{ textAlign: 'right' }}>Additional: </p><p className="ps-2" style={{ textAlign: 'left' }}> {product?.additionalInfo}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="order-details-section" style={{ borderLeft: '3px solid #fcffb0' }}>
                    <h5 className="py-2 white-text-black-background" >Please, fill up the form to book your order</h5>
                    <div >
                        <form className="shipping-form pt-4 w-100" onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true })} />
                            <br />
                            <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="error">This field is required</span>}

                            <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <br />
                            <textarea className="m-0" placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <br />

                            <input type="number" min="0" placeholder="Contact Number" defaultValue="" {...register("phone", { required: true })} />

                            <br />
                            <input className="submit-input" style={{ padding: '2px', fontWeight: '700' }} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;

