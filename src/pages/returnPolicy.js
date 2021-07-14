// import React from 'react'
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet'

// import SecondaryNav from '../partials/secondaryNav'
// import Header from '../partials/header'
// import SecondaryFooter from '../partials/secondaryFooter'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const returnPolicy = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader"> Loading... </div>}> 

            <Helmet>
                <title>
                    Return & refund policy - Vipash Technologies
                </title>
            </Helmet>

            <SecondaryNav />

            <Header heading={ 'Return Policy' }/>

            <div id="content">
                <div className="container">
                    <h3>STANDARD REFUND TERMS</h3>
                    <br />
                    <p>If any service purchased from vipash technologies, may be refunded only if cancelled within the following timeframe:</p>
                    <p> <strong> Website Development Plans </strong> - Within 8 days of project confirmation payment processed. From which domain and hosting amount will be deducted as we will purchase it from 3rd party.</p>
                    <p><strong>Web Hosting</strong> - Within 30 days of service started</p>
                    <p>You may cancel a service at any time, but a refund will only be issued if cancellation is requested within the refund timeframe specified for the applicable service.</p>
                    <p>Note: Some services have different policies or requirements for a refund associated with them, including some services that are not eligible for a refund under any circumstance.</p>
                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                </div>
            </div>

             <SecondaryFooter />

             </Suspense>
        </React.Fragment>
    )
}

export default returnPolicy
