import React from 'react';

import PrimaryNav from '../partials/primaryNav'
import Hero from '../partials/hero'
import Expertiese from '../partials/expertiese'
import Intro from '../partials/intro'
import Reviews from '../partials/reviews-and-customers'
import PrimaryFooter from '../partials/primaryFooter'

const home = () => {
    return (
        <React.Fragment>
            <PrimaryNav />

            <Hero />

            <Expertiese />

            <Intro />

            <Reviews />

            <PrimaryFooter />
        </React.Fragment>
    )
}

export default home
