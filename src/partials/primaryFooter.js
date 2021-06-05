import React from 'react';
import { IoLocationOutline, IoCallOutline, IoAtSharp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

import logo from '../static/card-image.png'

import ContactForm from './contactForm'

const primaryFooter = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="grid-12 mgrid">
                    <div className="container">
                        <ContactForm />
                    </div>

                    <div className="grid-2 mgrid">
                        <div>
                            <img src={logo} alt="logo" className="footer-logo" />
                        </div>
                        <div> 
                            <address> 
                                <IoLocationOutline /><br />
                                33/A, Sonchapha Colony <br />
                                Near Kalyani Nagar <br />
                                Sakri Road, Dhule <br />
                                Maharashtra, India <br />
                                <br />
                                <span className="phoneNo"> <IoCallOutline /><a href="#"> &nbsp;+91&nbsp;6545851263 </a> </span><br />
                                <span className="phoneNo"> <IoAtSharp /> <a href="#"> &nbsp;parag@example.com </a></span>
                                
                            </address>
                        </div>
                        <div>
                            <ul className="quick-links">
                                <li>
                                    <a href="#"> FAQ </a>
                                </li>
                                <li>
                                    <a href="#"> Privacy Policy </a>
                                </li>
                                <li>
                                    <a href="#"> Return and Refund Policy </a>
                                </li>
                                <li>
                                    <a href="#"> Terms and Conditions </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="social-media-links">
                                <a href="#"> <IoLogoFacebook /> </a>
                                <a href="#"> <IoLogoInstagram /> </a>
                                <a href="#"> <IoLogoLinkedin /> </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default primaryFooter
