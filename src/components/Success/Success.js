import './Success.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="pb-2" style={{ backgroundColor: '#a6a8a8' }}>
            <h4 className="white-text-black-background py-1">Yay! Your Order Placed Successfully!</h4>
            <img className="img-fluid" src="https://i.ibb.co/Kh5NSHr/giphy.gif" alt="" />
            <div style={{ backgroundColor: 'black', color: 'white' }} className="mb-3 login-reg-div mt-3 py-1">
                <span><strong style={{ fontSize: '18px' }}> <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> Now Click To Go Back To Your Dashboard </Link> </strong></span>
            </div>
        </div>
    );
};

export default Success;