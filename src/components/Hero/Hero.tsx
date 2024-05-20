import React from 'react'
import './hero.scss'
//const Ben =  require("../../assets/images/ben.jpg");
import Ben from "../../assets/images/ben.jpg"
// const TrueAgency = require ('../../assets/images/true-agency.jpg');
import TrueAgency  from "../../assets/images/true-agency.jpg"
const Hero: React.FC = () => {
    return (
        <>
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">

                <div className="container">
                    <div className="row">

                        <div className="mx-auto col-lg-5 col-md-5 col-10">
                            <img src={Ben} className="img-fluid" alt="Ben Resume HTML Template"/>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">

                                <h1 className="hero-title">👋 Ben, a digital nomad</h1>

                                <a href="#" className="email-link">
                                    hello@company.co
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about section-padding" id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-12">
                            <h3 className="mb-4">This is Ben's Resume</h3>

                            <p>Ben Resume HTML Template is brought to you by <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate website</a>. You can feel free to edit and use this page for your small site. You are allowed to use this HTML template for any kind of purpose.</p>

                            <p>However, please do not re-distribute the downloadable template ZIP file on any template collection website. This is strongly prohibited. Please contact Tooplate for more information.</p>

                            <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                                <li><strong>Full Name :</strong> Ben Wilson </li>

                                <li><strong>Date of Birth:</strong> 26 September 1999</li>

                                <li><strong>Website :</strong> company.co</li>

                                <li><strong>Email :</strong> hello@company.co</li>
                            </ul>
                        </div>

                        <div className="col-lg-5 mx-auto col-md-6 col-12">
                            <img src={TrueAgency} className="about-image img-fluid" alt="Ben's Resume HTML Template"/>
                        </div>

                    </div>
                    <div className="row about-third">
                        <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer volutpat</h3>
                        <p>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <h3>Mauris semper</h3>
                        <p>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer id neque</h3>
                        <p>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero