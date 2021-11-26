import './MyOrders.css';

import React, { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';


const MyOrders = () => {

    const { user } = useAuth();
    const filteredEmail = { email: user.email };
    const [myOrders, setMyOrders] = useState([]);
    const [noOrderValue, setNoOrderValue] = useState(0)
    useEffect(() => {
        fetch('https://damp-citadel-82174.herokuapp.com/filtered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(filteredEmail)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.length)
                if (data.length > 0) {
                    setMyOrders(data);
                    setNoOrderValue(2);
                }
                else {
                    setNoOrderValue(1)
                }

            })
    }, [])
    // console.log(noOrderValue)

    const handleDelete = (id) => {
        // console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://damp-citadel-82174.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = myOrders.filter(o => o._id !== id);
                        setMyOrders(remaining);
                    }
                })
        }
    }

    return (
        <div className="">
            <div className="m-0 p-0 " >

                <h4 className="white-text-black-background pt-1 pb-2">Order List of {user.displayName.slice(0, 10)}</h4>

            </div>
            <div >
                {
                    (noOrderValue === 1) ?
                        <>
                            <div className="d-flex flex-column justify-content-center">
                                <h4 style={{ color: 'whitesmoke', background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(133,130,130,1) 30%, rgba(133,130,130,1) 70%, rgba(0,0,0,1) 100%)' }}>No Order Found!!</h4>
                                <img className="img-fluid w-100 h-75 px-5" src="https://i.ibb.co/c18WNYb/Women-holding-yellow-speech-bubble-with-sad-face.jpg" alt="" />
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-2 my-order-map-container px-3">
                                {
                                    myOrders.map(o => <div style={{ background: '#2b2c2cd7', color: 'white', borderRadius: '10px' }} className="pb-4 single-my-order-container" key={o._id} >
                                        <div className="single-my-order-div" >
                                            <div className="d-flex flex-column">

                                                <img src={o.order.img} alt="" className="w-100 img-fluid" />
                                                <h6 className="ps-2 pt-2">Package Name: {o.order.name}</h6>
                                                <h6 className="ps-2 pt-2">Fee: {o.order.price} Tk</h6>

                                                <h6>Order Status: {o.status}</h6>

                                            </div>
                                            <div className="delete-btn-div">
                                                <button onClick={() => handleDelete(o._id)} className="w-100 order-delete-btn"><strong>Delete Order</strong> </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </>
                }
            </div>


        </div>
    );
};

export default MyOrders;

