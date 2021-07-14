import React, { Suspense, lazy } from 'react'
import {IoCallOutline, IoAtSharp} from 'react-icons/io5'
import { Helmet } from 'react-helmet'

// import SecondaryNav from '../partials/secondaryNav'
// import Header from '../partials/header'
// import ContactForm from '../partials/contactForm'
// import  from '../partials/secondaryFooter'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const ContactForm = lazy(() => import('../partials/contactForm'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const contact = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div className="loader"> Loading... </div>}>

            <Helmet>
                <title> Contact us - Vipash Technologies </title>
            </Helmet>

            <SecondaryNav />

            <Header heading={ 'Contact Us' }/>

            <div id="content">
                <div className="container">
                    <div className="grid-12 mgrid">
                        <div className="w-90">
                            <ContactForm />
                        </div>

                        <div className="card address">
                            {/* <address> */}
                            <p>
                                33/A, Sonchapha Colony <br />
                                Near Kalyani Nagar <br />
                                Sakri Road, Dhule <br />
                                Maharashtra, India <br />
                                424001 <br />
                            </p>
                            <span className="phoneNo"> <IoCallOutline /><a href="#"> &nbsp;+91&nbsp;6545851263 </a> </span><br />
                            <span className="phoneNo"> <IoAtSharp /> <a href="#"> &nbsp;parag@example.com </a></span>
                            {/* </address> */}
                        </div>
                    </div>
                </div>
            </div>

            <SecondaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default contact
