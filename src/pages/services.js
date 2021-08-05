import React, { Suspense, lazy } from 'react';
import {IoCodeSlashOutline, IoCartOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const services = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader"> Loading... </div>}>  
            <Helmet>
                <title> Services - Vipash Technologies </title>
            </Helmet>

            <SecondaryNav />

            <Header heading ={ 'Services' }/>

            <div id="content">
                <div className="container">
                    <div className="grid-12 mgrid p-tb-30">
                       
                        <Link to="/services/web-development">
                            <div className="card serviceCard">
                                <div className="icon"> <IoCodeSlashOutline /> </div>
                                <div className="heading"> Website Development </div>
                            </div>
                        </Link>

                        <Link to="/services/ecommerce-development">
                            <div className="card serviceCard">
                                <div className="icon"> <IoCartOutline /> </div>
                                <div className="heading"> eCommerce </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <SecondaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default services
