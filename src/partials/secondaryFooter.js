import React from 'react';
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoCallOutline, IoAtSharp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'


const secondaryFooter = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid-13 mgrid">
                    <div>
                        <address> 
                            {/* <i class="las la-map-marked-alt"></i><br /> */}
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
                            <a href="#"> <IoLogoFacebook /> </a>
                            <a href="#"> <IoLogoInstagram /> </a>
                            <a href="#"> <IoLogoLinkedin /> </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secondaryFooter
