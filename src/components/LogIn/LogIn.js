import './LogIn.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const history = useHistory();
    const { googleSignIn, handleEmailChange, handlePasswordChange, email, password, auth, saveUser } = useAuth();
    const [error, setError] = useState("");
    const location = useLocation();
    const redirect_Url = location.state?.from || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                history.push(redirect_Url);
            })
            .catch((error) => {
                setError(error.message)
                // setUser({});
                // setErrorMsg(error.message);
            });
    }
    const handleEmailLogin = e => {
        // console.log('hit first time');
        e.preventDefault();
        // console.log('hit 2nd time');
        // return signInWithEmailAndPassword(auth, email, password)
        processLogIn(email, password);
    }
    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                history.push(redirect_Url);
            })
            .catch((error) => {


                //console.log(error.message);
                if (error.code === "auth/user-not-found") {
                    setError("Wrong Email")
                }
                else {
                    setError("Wrong Password")

                }

            });
    }

    return (
        <div className="pt-5 login-section" >

            <div className="h-100 pb-4 login-container d-flex flex-column justify-content-between">
                <div >
                    <div>
                        <h5 style={{ backgroundColor: 'black', color: 'white' }} className="py-1">Please Login To Get Full Access</h5>
                    </div>
                    <div className="login-form-div">
                        <form onSubmit={handleEmailLogin} className="mb-1 login-form-only">

                            <input onBlur={handleEmailChange} className=" p-1 login-input" type="email" name="" id="" placeholder="Your Email" />
                            <br />
                            <br />
                            <input onBlur={handlePasswordChange} placeholder="Your Password" className="p-1 login-input" type="password" name="" id="" />
                            <br />

                            <p className=" my-1 display-error" >{error}</p>
                            <input style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid black' }} className="login-submit-input" type="submit" value="Login" />

                        </form>
                        <span className=" or-span" >-----------Or-----------</span>
                        <br />
                        <button style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid black' }} onClick={handleGoogleSignIn} className="google-sign-btn mt-1">Google Sign In</button>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white' }} className="login-reg-div mt-2 mb-5 py-1">
                    <span><strong style={{ fontSize: '18px' }}>Are You A New Member? <Link style={{ textDecoration: 'none', color: 'white' }} to='/register'> Click Here To Register </Link> </strong></span>
                </div>
            </div>
        </div>
    );
};

export default LogIn;