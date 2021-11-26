import './Footer.css'

import React from 'react';

const Footer = () => {
    return (
        <div className="footer-section-container">
            <div className="container  w-100 py-4 px-2">
                <div className="row p-2 footer-container-row">
                    <div style={{ border: '3px solid #fcffb0', borderRadius: '10px', boxShadow: '1px 3px 2px 3px' }} className="col pt-2 mx-2 ">
                        <div>
                            <h5 style={{ color: 'white', fontWeight: '600' }}>Join The Community <i className="fas fa-users"></i></h5>
                        </div>
                        <div className="p-2">
                            <a rel="noopener noreferrer" href="https://www.facebook.com" target="_blank">
                                <i style={{ color: '#1877f2' }} className="m-1 fab fa-facebook-square fa-2x"></i></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com" target="_blank">
                                <i className="insta m-1 fab fa-instagram fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">
                                <i style={{ color: '#E60023' }} className="m-1 fab fa-pinterest-square fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
                                <i style={{ color: '#00acee' }} className="m-1 fab fa-twitter-square fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank">
                                <i style={{ color: '#c4302b' }} className="m-1 fab fa-youtube-square fa-2x"></i></a>
                        </div>
                    </div>
                    <div style={{ border: '3px solid #fcffb0', borderRadius: '10px', boxShadow: '1px 3px 2px 3px' }} className="col pt-2 mx-2 footer-mid-column">
                        <div>
                            <h6 style={{ color: 'white', fontWeight: '700' }}>Get Updates On Events, Offers And More</h6>
                        </div>
                        <div>
                            <input id="input-field" className="w-75 email-box form-label text-center" type="text" name="email" placeholder="Enter Your Email" />
                        </div>
                        <div >
                            <button style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid black' }} className="mb-1 subscribe-btn"><i className="fas fa-bell"></i> Subscribe</button>
                        </div>
                    </div>
                    <div style={{ border: '3px solid #fcffb0', borderRadius: '10px', boxShadow: '1px 3px 2px 3px' }} className="col pt-2 mx-2">
                        <div>
                            <h5 style={{ color: 'white', fontWeight: '700' }}>Our Location <i className="fas fa-store"></i></h5>
                        </div>
                        <div style={{ color: 'white' }}>
                            <h6>House No: 76, Mirpur DOHS</h6>

                            <h6>Dhaka, Bangladesh.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ">

                <a className="fixed-bottom d-flex flex-row-reverse pe-2" style={{ color: "white" }} href="#"><h1 style={{ fontSize: "40px" }}><strong ><i className="far fa-arrow-alt-circle-up"></i></strong></h1></a>

            </div>

        </div>
    );
};

export default Footer;