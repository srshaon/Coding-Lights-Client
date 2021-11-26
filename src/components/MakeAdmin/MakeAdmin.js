import './MakeAdmin.css';

import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://damp-citadel-82174.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin Appointed Successfully')

                    reset();
                }
            })

    };
    return (
        <div className="make-admin-container">
            <h5 style={{ backgroundColor: 'black', color: 'white', padding: '6px' }}>Enter An Email To Make Him/Her An Admin</h5>
            <div className="py-5" >

                <form className="make-admin-form p-1" onSubmit={handleSubmit(onSubmit)}>


                    <input className="w-75 me-1" style={{ border: '2px solid black' }} placeholder="registered user's email id" {...register("email", { required: true })} />

                    <input style={{ backgroundColor: 'transparent', padding: '2px', fontWeight: '700', border: '2px solid white' }} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;

