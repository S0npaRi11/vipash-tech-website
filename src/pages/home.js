import React, { Suspense, lazy } from 'react';

// import PrimaryNav from '../partials/primaryNav'
// import Hero from '../partials/hero'
// import Expertiese from '../partials/expertiese'
// import Intro from '../partials/intro'
// import Reviews from '../partials/reviews-and-customers'
// import PrimaryFooter from '../partials/primaryFooter'

const PrimaryNav = lazy(() => import('../partials/primaryNav'))
const Hero = lazy(() => import('../partials/hero'))
const Expertiese = lazy(() => import('../partials/expertiese'))
const Intro = lazy(() => import('../partials/intro'))
const Reviews = lazy(() => import('../partials/reviews-and-customers'))
const PrimaryFooter = lazy(() => import('../partials/primaryFooter'))

const home = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div className="loader"> Loading... </div>}>
            <PrimaryNav />

            <Hero  id={'hero'} title={'We provide online solutions that fits your needs'}/>

            <Expertiese />

            <Intro />

            <Reviews />

            <PrimaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default home
