import './Register.css'
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { user, logOut, handleRegistration, handlePasswordChange, handleEmailChange, googleSignIn, setName, handleNameChange, error, setError, saveUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_Url = location.state?.from || '/';
    const redirect = () => {
        history.push(redirect_Url);

    }
    const handleEmailRegistration = e => {
        e.preventDefault();
        handleRegistration(redirect)

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                history.push(redirect_Url);
            })
    }
    return (
        <div className="pt-5 registration-section ">
            <div className="h-100 pb-4 login-container d-flex flex-column justify-content-between">
                <div >
                    <div>
                        <h5 style={{ backgroundColor: 'black', color: 'white' }} className="py-1">Register To Explore The Beauty Beyond Imagination</h5>
                    </div>
                    <div className="registration-div">
                        <form onSubmit={handleEmailRegistration} className="mb-1">
                            <input required onBlur={handleNameChange} className="login-input p-1" type="name" name="" id="" placeholder="Your Name" />
                            <br />
                            <br />
                            <input required onChange={handleEmailChange} className="login-input  p-1" type="email" name="" id="" placeholder="Your Email" />
                            <br />
                            <br />
                            <input required onChange={handlePasswordChange} placeholder="Your Password" className="p-1  login-input" type="password" name="" id="" />
                            <br />

                            <p className=" my-1 display-error" >{error}</p>

                            <input style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid black' }} className="login-submit-input" type="submit" value="Register" />


                        </form>
                        <span className=" or-span" >-----------Or-----------</span>
                        <br />
                        <button style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid black' }} onClick={handleGoogleSignIn} className="google-sign-btn mt-1">Google Sign In</button>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white' }} className="mb-3 login-reg-div mt-3 py-1">
                    <span><strong style={{ fontSize: '18px' }}>Already Registered? <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'> Click Here To Login </Link> </strong></span>
                </div>
            </div>
        </div>
    );
};

export default Register;