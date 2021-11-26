import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'rgba(95,116,184,255)' }}>
                <Link to='/home'>
                    <button className="go-back-btn" >Go Back</button>
                </Link>
            </div>
            <img className="img-fluid" src="https://i.ibb.co/dkJ75m2/fd78c47f2a009df65b5b5a46f4437399-1.png" alt="" />
            <div style={{ backgroundColor: 'rgba(95,116,184,255)' }}>
                <Link to='/home'>
                    <button className="go-back-btn" >Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;