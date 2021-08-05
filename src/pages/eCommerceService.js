import React, { Suspense, lazy } from 'react'
import {IoHammerOutline, IoBrushOutline, IoSearchCircleOutline, IoPhonePortraitOutline, IoSunnyOutline, IoLogoPaypal, IoBagCheckOutline, IoPersonOutline} from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'

const PrimaryNav = lazy(() => import('../partials/primaryNav'))
const PrimaryFooter = lazy(() => import('../partials/primaryFooter'))
const Hero = lazy(() => import('../partials/hero'))
const Portfolio = lazy(() => import('../partials/intro'))

const eCommerceService = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader"> Loading... </div>}>

          

            <Helmet>
                <title> eCommerce Development - Vipash Technologies </title>
            </Helmet>

            <PrimaryNav />

            <Hero id={'hero-eCommerce'} title={'Build eCommerce solutions'}/>

            <section id="content" className="ecom-content">
               <div className="container">
                   <h2 className="heading"> eCommerce Website Development that generates sales </h2>
                   <p className="sub-heading">
                        Offer your audience an optimized eCommerce experience that seamlessly,
                        instantly put your products and services in their hands. 
                    </p>


                   <Fade up duration={800}>
                   <h2>  eCommerce Website Features </h2>
                   </Fade>

                    <div className="grid-12 mgrid landing-info">
                        <Fade left duration={800} delay={0}>
                            <div className="grid-12 mgrid">
                                <div> 
                                    <IoHammerOutline />
                                </div>
                                <div className="container">
                                    <h3>  Easy to Manage </h3>
                                    <p> We design e-stores that are easy to manage, keeping simplicity and productivity in mind. <br /> We also provide a complete store navigation documentation. </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right duration={800} delay={0}>
                            <div className="grid-12 mgrid">  
                            <div> <IoBrushOutline /> </div>
                                <div className="container"> 
                                    <h3> Rich Design Experience </h3>
                                    <p>  We understand the importance how much of a simple, clean and elegent design ffect the business. We strive to deliver the best experience to the users to the best of our abilities. </p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="grid-12 mgrid landing-info">
                        <Fade left duration={800} delay={50}>
                            <div className="grid-12 mgrid">  
                            <div> <IoSearchCircleOutline /> </div>
                                <div className="container"> 
                                    <h3> Search Engine Friendly </h3>
                                    <p> Visibility on the search engine of the products displyed is a crutial thing to have for an eCommerce business. We develop our products such taht each and every product displyed on the store is SEO frinedly. </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right duration={800} delay={50}>
                            <div className="grid-12 mgrid"> 
                                <div> <IoPhonePortraitOutline /> </div>
                                <div className="container">
                                    <h3> Mobile-First Approach </h3>
                                    <p> The increasing users of internet via mobile inspire us to make the mobile experience as feature-rich and plesent as on any other platform. <br /> We develop our products with a 'Mobile First' approch, taking all sorts of mobile devices and browsers into consideration to deliver a rich user experience. </p>
                                </div> 
                            </div>
                        </Fade>
                    </div>

                    <div className="grid-12 mgrid landing-info">
                        <Fade left duration={800} delay={100}>
                            <div className="grid-12 mgrid"> 
                                <div> <IoSunnyOutline /> </div>
                                <div className="container">
                                    <h3> User-Friendly Interface </h3>
                                    <p> We stive to deliver an appealing appearance and a easy to navigate, feature-rich, user-friendly design for the best user experience. </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right duration={800} delay={100}>
                            <div className="grid-12 mgrid">
                                <div> <IoLogoPaypal /> </div>
                                <div className="container"> 
                                    <h3> Secure and Easy Payment Gateway </h3>
                                    <p> Our consultants go the extra mile to develop a fast, secure, easy and robust payment gateway for no-fuss monetary transactions.With powerful security installations, credit and debit payments are conducted without the looming fears of fraud and breach. Net-banking payments become easier to handle.  </p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="grid-12 mgrid landing-info">
                        <Fade left duration={800} delay={150}>
                            <div className="grid-12 mgrid"> 
                                <div> <IoBagCheckOutline /> </div>
                                <div className="container">
                                    <h3> Faster Checkout Process </h3>
                                    <p> We ensure a checkout mechanism that brings brightening smiles on the faces while shopping. Smart, safe and updated checkout prompts customers to shop and engage more. Keeping customers at ease is of vital importance. </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right duration={800} delay={150}>
                        <div className="grid-12 mgrid">
                            <div> <IoPersonOutline /> </div>
                            <div className="container"> 
                                <h3> Tailor-Made </h3>
                                <p> An e-store will rise to fame only when it gets positive responses from the customers. We equip your portal with next-generation features and modules, making it an exemplary model of style, quality, and work-ability. </p>
                            </div>
                        </div>
                        </Fade>
                    </div>
               </div>
            </section>

            <Portfolio />

            <PrimaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default eCommerceService
