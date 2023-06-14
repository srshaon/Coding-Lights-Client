import './AllOrders.css';
import { Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://coding-lights.onrender.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])
    // console.log(allorders);
    const handleDelete = (id) => {
        // console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://coding-lights.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = allorders.filter(o => o._id !== id);
                        setAllorders(remaining);
                    }
                })
        }
    }
    const handleConfirm = (id) => {
        // console.log(id);
        // const newStatus = { status: 'confirmed' };
        // console.log(newStatus);
        const proceed = window.confirm('Confirm Order?');
        if (proceed) {
            const url = `https://coding-lights.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'put'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Order Approved Successfully')

                        fetch('https://coding-lights.onrender.com/orders')
                            .then(res => res.json())
                            .then(data => setAllorders(data))
                    }
                })
        }
    }
    if (allorders.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="pb-1">
            <div className="m-0">

                <h4 className="white-text-black-background py-1">Total Orders of All User: {allorders.length}</h4>

            </div>
            <div className="mt-2 my-order-map-container px-3">
                {
                    allorders.map(o => <div key={o._id} style={{ background: '#2b2c2cd7', color: 'white', borderRadius: '10px' }} className="pb-4  single-my-order-container" >
                        <div className="single-my-order-div">
                            <div className="d-flex flex-column">

                                <img src={o.order.img} alt="" className="w-100 img-fluid" />
                                <h6 className="ps-2 pt-2">Package Name: {o.order.name}</h6>
                                <h6 className="ps-2 pt-2">Price: {o.order.price} Tk</h6>

                                <h6>Order Status: {o.status}</h6>

                            </div>
                            <br />
                            <div className="delete-btn-div">
                                {o.status === 'pending' ?
                                    <button onClick={() => handleConfirm(o._id)} className="w-100 confirm-btn mb-3"><strong>Confirm Order</strong></button> : <></>}
                                <div>

                                    <button onClick={() => handleDelete(o._id)} className="w-100 order-delete-btn"><strong>Delete Order</strong> </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllOrders;