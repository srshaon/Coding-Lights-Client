import './Welcome.css';

import React from 'react';
import useAuth from '../../hooks/useAuth';

const Welcome = () => {
    const { admin } = useAuth();
    return (
        <div >
            <h2 className="m-0" style={{ color: 'white', backgroundColor: 'black' }}>Welcome To {admin.toUpperCase()} Dashboard</h2>
            <img className="img-fluid w-100 h-100 m-0 p-0" src="https://i.ibb.co/CnxqN90/pexels-neosiam-625219-1.jpg" alt="" />
        </div>
    );
};

export default Welcome;