import './Banner.css';

import React from 'react';

const Banner = () => {
    return (
        <div >
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/fFf2jdy/11.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Coding Lights</h2>
                            <h6 style={{ fontWeight: '700' }}>Programming Brightness To Your Place</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/KhMmjS3/9.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Coding Lights</h2>
                            <h6 style={{ fontWeight: '700' }}>Programming Brightness To Your Place</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/tPbYRRk/8.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Coding Lights</h2>
                            <h6 style={{ fontWeight: '700' }}>Programming Brightness To Your Place</h6>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;