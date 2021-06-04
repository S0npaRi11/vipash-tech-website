import logo from '../static/card-image.png'

import contactForm from './contactForm'

const primaryFooter = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="grid-12 mgrid">
                    <div className="container">
                        {/* <h2 className="heading"> Contact Us </h2>

                        <div className="form">
                            <label htmlFor="name"> Name </label> <br />
                            <input type="text" id="name"/>

                            <br />

                            <label htmlFor="business-name"> Business Name </label> <br />
                            <input type="text" id="businessName"/>    

                            <br />

                            <label htmlFor="email"> email </label> <br />
                            <input type="email" id="email"/>  

                            <br />

                            <label for="name"> Message </label> <br />
                            <textarea name="message" id="message" cols="20" rows="6"></textarea> 

                            <br />

                            <button type="submit" id="submit"> Submit </button>
                        </div> */}

                        <contactForm />
                    </div>

                    <div className="grid-2 mgrid">
                        <div>
                            <img src={logo} alt="logo" class="footer-logo" />
                        </div>
                    </div>
                    <div> 
                        <address> 
                            <i class="las la-map-marked-alt"></i><br />
                            33/A, Sonchapha Colony <br />
                            Near Kalyani Nagar <br />
                            Sakri Road, Dhule <br />
                            Maharashtra, India <br />
                            <br />
                            <span class="phoneNo"> <i class="las la-phone"></i><a href="#"> &nbsp;+91&nbsp;6545851263 </a> </span><br />
                            <span class="phoneNo"> <i class="las la-at"></i> <a href="#"> &nbsp;parag@example.com </a></span>
                            
                        </address>
                    </div>
                    <div>
                        <ul class="quick-links">
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
                        <span class="social-media-links">
                            <a href="#"> <i class="lab la-facebook"></i> </a>
                            <a href="#"> <i class="lab la-instagram"></i> </a>
                            <a href="#"> <i class="lab la-linkedin-in"></i> </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default primaryFooter
