import React, { Suspense, lazy } from 'react';
import {IoDesktopOutline, IoCogSharp,IoCartOutline,IoLogoNodejs } from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'

const PrimaryNav = lazy(() => import('../partials/primaryNav'))
const PrimaryFooter = lazy(() => import('../partials/primaryFooter'))
const Hero = lazy(() => import('../partials/hero'))
const Portfolio = lazy(() => import('../partials/intro'))

const websiteDevService = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader"> Loading... </div>}>

            <Helmet>
                <title> Website development - Vipash Technologies </title>
            </Helmet>

            <PrimaryNav />

            <Hero id={'hero-websiteDev'} title={'Get yourself a website'}/>

            <section id="content">
                <div className="container">

                    <h2 className="heading"> Reliable and Result oriented Web Development services </h2>
                    <p className="sub-heading"> 
                        Vipash Technologies offers you variety of web development services, ranging from a simple static web page to to the most
                        critical/complex web-based social network services, electronic business, e-commerce, and Internet applications.
                    </p>

                    <div className="grid-12 mgrid landing-info">
                        <div className="landing-icon"> <Fade left duration={800}>  <IoDesktopOutline/> </Fade> </div> 
                            <div>
                                <h2> Front End Development </h2>
                                <p>  Strong Impression with beautiful, user-friendly user interface. </p>
                                <br />
                                <p>  
                                    A Web application / website needs a strong front end implimentation and development.
                                    Vipash Technologies can transform your  your cutting-edge graphic designs into highly usable front-end application that is 
                                    clean and beautiful, compatible with all modern browser, responsive to all devices and clean validated markup as per W3C standards.
                                </p>
                                <br />
                                <p> 
                                    Key Features: <br />
                                </p>
                                <ul>
                                    <li> Highly functional interactive websites with user-friendly interface & smooth navigation with an emphesis on design </li>
                                    <li> Mobile optimized responsive web development </li>
                                    <li>  Feature-rich client applications with cross-browser, cross-platform, cross-device functionality </li>
                                </ul>
                            </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid-12 mgrid landing-info">
                        <div>
                            <h2> Custom Web Application Development </h2>
                            <p> Web Application tailored to your custom requirements </p>

                            <br />

                            <p>
                            Vipash Technologies is specialized in developing custom web application projects with 100% accuracy and exactly as per the requirements of your specific business. We are adapted using cutting-edge technologies to customize everything for you, be it front-end look & feel or it’s a back-end programming customization.  We use below technologies to produce fully functional, highly dynamic & interactive web solutions.
                            </p>

                            <br />

                            <ul>
                                <li> MongoDB </li>
                                <li> AWS </li>
                                <li> Google Cloud </li>
                                <li> NodeJS </li>
                                <li> React </li>
                            </ul>
                        </div>
                        <div className="landing-icon"> <Fade right duration={800}>  <IoCogSharp /> </Fade> </div> 
                    </div>
                </div>

                <div className="container">
                    <div className="grid-12 mgrid landing-info">
                       <div className="landing-icon"> <Fade left duration={800}>   <IoCartOutline />  </Fade> </div>
                        <div> 
                            <h2> E-commerce development </h2>
                            <p> eCommerce solutions which are scalable, flexible and feature-rich </p>
                            <br />

                            <p>
                            We use today’s best available technology to develop eCommerce that ensure we provide best of breed solutions backed by the best of breed platforms to our clients. We build eCommerce websites that present your catalog in an effective way that gives the best market exposure to your online business.
                            </p>

                            <br />
                            <p>  We are expert in eCommerce platforms </p>
                            <ul>
                                <li> Shopify </li>
                                <li> Custom eCommerce Solutions </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid-12 mgrid landing-info">
                        <div>
                            <h2> Development With Open Source </h2>
                            <p>  Customized solutions backed by globally recognized Open Source platforms </p>

                            <br />
                            <p>  Open source platforms have generated substantial growth & a significant amount of interest over the past few years. We can easily find an open source for almost anything. Our team uses these platforms on a day to day basis to create highly customized web applications. We provide open source customization & development services that include content management solutions, social networking platforms to sophisticated eCommerce websites.  Use of open-source ensures highly affordable cost, inherent flexibility & fast turnaround time. </p>

                            <br />
                            <p>  We are expert in following open-source platforms 
                            </p>

                            <ul>
                                <li> React </li>
                                <li> NodeJS </li>
                                <li> Express </li>
                            </ul>

                        </div>
                       <div className="landing-icon"> 
                        <Fade right duration={800}>
                                <IoLogoNodejs /> 
                        </Fade>
                        </div>
                    </div>
                </div>

            </section>

            <Portfolio />

            <PrimaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default websiteDevService
