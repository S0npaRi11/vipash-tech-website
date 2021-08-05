import React, { Suspense, lazy } from 'react';

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
