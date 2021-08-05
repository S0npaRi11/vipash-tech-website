import React from 'react';
import { Link } from 'react-router-dom'
import { IoCallOutline, IoAtSharp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'


const secondaryFooter = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid-13 mgrid">
                    <div>
                        <address> 
                            33/A, Sonchapha Colony <br />
                            Near Kalyani Nagar <br />
                            Sakri Road, Dhule <br />
                            Maharashtra, India <br />
                            <br />
                            <span className="phoneNo"> <IoCallOutline /><a href="tel:+917057634075"> &nbsp;+91&nbsp;7057634075 </a> </span><br />
                            <span className="phoneNo"> <IoAtSharp /> <a href="mailto:vipashtech@gmail.com"> &nbsp;vipashtech@gmail.com </a></span>
                            
                        </address>
                    </div>

                    <div>
                        <ul className="quick-links">
                            <li>
                                <Link to="/faq"> FAQ </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy"> Privacy Policy </Link>
                            </li>
                            <li>
                                <Link to="/return-policy"> Return and Refund Policy </Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions"> Terms and Conditions </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <span className="social-media-links">
                            <a href="https://www.facebook.com/vipashtech"> <IoLogoFacebook /> </a>
                            <a href="https://https://www.instagram.com/vipashtech/"> <IoLogoInstagram /> </a>
                            <a href="https://www.linkedin.com/company/74883767/"> <IoLogoLinkedin /> </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secondaryFooter
