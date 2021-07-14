import React, { Suspense, lazy } from 'react'
import {IoAnalytics, IoDesktop, IoHammer, IoOptions, IoTime, IoPlanet, IoFlame, IoShieldCheckmark, IoRose, IoShield} from 'react-icons/io5'
import { Helmet } from 'react-helmet'

import logo from '../static/Vipash-technologies-logo/logo-big.jpg'


const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))
const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const Clients = lazy(() => import('../partials/clientsList'))

// import logo from '../static/Vipash-technologies-logo/1.jpg'


const about = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div className="laoder"> Loading... </div>}>

                <Helmet>
                    <title> About us - Vipash Technologies </title>
                </Helmet>
                <SecondaryNav />

                <Header heading={'About'}/>

                <div id="content">
                    <div className="container">
                        <div className="grid-12 mgrid p-tb-30">
                            <div className="company-logo">
                                <img src={logo} alt="logo"/>
                            </div>

                            <div>
                                <p> Vipash Technologies is a one person web development business started with the love and passion for web development, by Parag Mahale. </p>
                                <p> Parag Mahale is a web designer, developer and a student of Computer Engineering from Dhule, Maharashtra, India. </p>
                                <p> He had worked previously as a freelancer locally working on some personalized projects and student projects. </p>

                                <br />
                                
                                <p> His love for web development started as soon as at age 16. </p>
                                <p> He has been working and refining his skills since then. </p> 

                                <Clients />
                            </div>

                        
                        </div>

                        <div className="about-info">
                            <h2 className="heading"> What we offer </h2>
                            <div className="card-grid grid-13 mgrid p-tb-50"> 

                                <div className="card">
                                    <div className="icon"> <IoAnalytics /> </div>
                                    <div className="heading">  Detailed Analysis </div>
                                    <div className="text"> Detailed analysis of your business needs and developing solutions that's fit for perpose. </div>
                                </div> 

                                <div className="card">
                                    <div className="icon"> <IoDesktop /> </div>
                                    <div className="heading">  Cutting Edge Technologies </div>
                                    <div className="text"> Design & Development with latest cutting edge technologies. </div>
                                </div>

                                <div className="card">
                                    <div className="icon"> <IoHammer /> </div>
                                    <div className="heading">  Support </div>
                                    <div className="text"> Annual or Life time support & maintenance. </div>
                                </div>
                            </div>

                            <h2 className="heading"> What we promise </h2>
                            <div  className="card-grid grid-13 mgrid p-tb-50">

                                <div className="card">
                                    <div className="icon"> <IoOptions /> </div>    
                                    <div className="heading"> Optimal Solution </div>
                                    <div className="text"> We design and develop the best optimal solutions that fits your needs. </div>
                                </div> 

                                <div className="card">
                                    <div className="icon"> <IoTime /> </div>
                                    <div className="heading"> Timely Delivery </div>
                                    <div className="text"> We promise to make our product online and usable within specified time limit. </div>
                                </div> 

                                <div className="card">
                                    <div className="icon"> <IoPlanet/> </div>
                                    <div className="heading">  Futuristic Solution </div>
                                    <div className="text"> Solution we provide will be futuristic that can be extendable and scalable as your business grows. </div>
                                </div> 
                            </div>

                            <h2 className="heading"> Why choose Vipash Technologies </h2>
                            <div className="card-grid grid-14 mgrid p-tb-50"> 

                                <div className="card">
                                    <div className="icon"> <IoFlame /> </div>
                                    <div className="heading">  Made with passion </div>
                                    <div className="text"> Made by the people with passion for web designing and development.  </div>
                                </div> 

                                <div className="card">
                                    <div className="icon"> <IoShieldCheckmark /> </div>
                                    <div className="heading">  Quality Assuarance </div>
                                    <div className="text"> Made with quality in mind. </div>
                                </div>

                                <div className="card">
                                    <div className="icon"> <IoRose /> </div>
                                    <div className="heading">  Beautiful, Fast and Reliable solutions </div>
                                    <div className="text"> 
                                        Websites should be beautiful, attractive yet fast and reliable. <br />
                                        Vipash Technologies offers you the website you need, without cutting any corners.
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="icon"> <IoShield /> </div>
                                    <div className="heading"> Reliable Support </div>
                                    <div className="text"> 
                                        We make ourselves easily accesible so you can reach out to us.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SecondaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default about
