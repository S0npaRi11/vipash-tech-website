import React from 'react'
import {IoCodeSlashOutline, IoCartOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import SecondaryNav from '../partials/secondaryNav'
import Header from '../partials/header'
import SecondaryFooter from '../partials/secondaryFooter'

const services = () => {
    return (
        <React.Fragment>

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


                        {/* <div className="card serviceCard">
                            <div className="icon"> <IoCogSharp /> </div>
                            <div className="heading"> Web Services Development </div>
                        </div> */}

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
        </React.Fragment>
    )
}

export default services
