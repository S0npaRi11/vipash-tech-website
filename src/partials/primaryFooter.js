import React from 'react';
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoCallOutline, IoAtSharp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import Reveal from 'react-reveal/Fade'

import logo from '../static/Vipash-technologies-logo/2.jpg'

import ContactForm from './contactForm'

const primaryFooter = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="grid-12 mgrid">
                    <div className="container" id="contact-form">
                        <h2 className="heading"> Contact Us </h2> 

                        <Reveal up duration={800}>
                            <ContactForm />
                        </Reveal>
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
                                <span className="phoneNo"> <IoCallOutline /><a href="#"> &nbsp;+91&nbsp;7057634075 </a> </span><br />
                                <span className="phoneNo"> <IoAtSharp /> <a href="#"> &nbsp;parag@example.com </a></span>
                                
                            </address>
                        </div>
                        <div>
                            <ul className="quick-links">
                                <li>
                                    <Link to="/faq"> FAQ </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy/"> Privacy Policy </Link>
                                </li>
                                <li>
                                    <Link to="/return-policy/"> Return and Refund Policy </Link>
                                </li>
                                <li>
                                    <Link to="/terms-and-conditions/"> Terms and Conditions </Link>
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
