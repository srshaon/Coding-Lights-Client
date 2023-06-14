import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';


const Header = () => {
    const { user, logOut, name, setShow } = useAuth();
    // console.log('this is state', name);
    // console.log(user.displayName);
    let loggedUserName = '';
    if (user?.displayName === null) {

        // console.log('came from name')
        loggedUserName = name;
    }
    else {
        loggedUserName = user?.displayName;
        // console.log('came from display')
    }
    // console.log(user);
    return (
        <div className="header-container " >
            <div className="" >
                <nav className="header-container   navbar navbar-expand-lg navbar-light  ">
                    <div className="container-fluid mx-5">
                        <NavLink to="/" className="navbar-brand">
                            <img src="https://i.ibb.co/7GDLnNz/filename-4.png" height="50" alt="" />

                        </NavLink>
                        <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" collapse navbar-collapse nav-container" id="navbarTogglerDemo02">

                            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">

                                <li className="nav-item boxShadow">
                                    <NavLink className="navlinks nav-link active text-white" aria-current="page" to="/home"><i className="fas fa-home"> Home</i> </NavLink>

                                </li>


                                <li className="nav-item  boxShadow">
                                    <NavLink className="navlinks nav-link active text-white" aria-current="page" to="/allproducts"><i className="fas fa-angle-double-right"> Explore</i></NavLink>

                                </li>

                            </ul>

                            <ul className="navbar-nav  ">

                                {user.email ?
                                    <>
                                        <li className="nav-item boxShadow">
                                            <NavLink className="navlinks text-white nav-link active " aria-current="page" to="/dashboard">
                                                <i className="fas fa-clipboard-list"> Dashboard</i></NavLink>
                                        </li>


                                        <button style={{ backgroundColor: 'transparent' }} className="boxShadow" onClick={logOut}><i className="fas fa-user-minus text-white"></i> <strong className="text-white">Log Out</strong></button>

                                        <span className="span-user-name boxShadow"><h6 className="text-white span-header-name">Hello Dear {loggedUserName.slice(0, 10)}</h6></span>

                                        <span >
                                            {
                                                (user?.photoURL) ?
                                                    <div className="header-image-div ">
                                                        <img style={{ border: '2px solid white' }} className="rounded-circle header-image " src={user?.photoURL} alt="" />
                                                    </div>
                                                    :
                                                    <>
                                                        <div className="header-image-div-default ">
                                                            <img style={{ border: '2px solid white' }} className="rounded-circle header-default-image " src={"https://i.ibb.co/X4s5CGp/download.png"} alt="" />
                                                        </div>

                                                    </>
                                            }
                                        </span>

                                    </>
                                    :

                                    <>
                                        <li className="nav-item boxShadow">
                                            <NavLink className="nav-link active  navlinks" aria-current="page" to="/login"><i className="text-white fas fa-user-check"> Log In</i></NavLink>
                                        </li>
                                        <li className="nav-item boxShadow">
                                            <NavLink className="nav-link active text-white navlinks" to="/register"><i className="fas fa-user-plus"> Registration</i></NavLink>
                                        </li>
                                    </>}


                            </ul>



                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;