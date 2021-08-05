import React from 'react';
import Zoom from 'react-reveal/Zoom'

import pmThumb from '../static/portfolio-thumbnails/s0npaRi11-portfolio-img.webp'
import chipmunkThumb from '../static/portfolio-thumbnails/chipmunk-store-img.webp'

const intro = () => {
    return (
        <section id="intro">
            <h2 className="heading"> Portfolio </h2>

            <div className="container">
                <div className="grid-12 mgrid p-tb-30">
                    <Zoom duration={800} delay={0}>
                        <a href="https://s0npari11.github.io/">
                            <div className="card portfolioCard">
                                <img src={pmThumb} alt="parag-mahale-portfolio" className="img" />
                                <div className="heading"> Parag Mahale - Portfolio </div>
                                <div className="text"> A portfolio website keeping simplicity and easy-navigation in mind. </div>
                            </div>
                        </a>
                    </Zoom>

                    <Zoom duration={800} delay={50}>
                    <a href="https://chipmunkstore.com/">
                            <div className="card  portfolioCard">
                                <img src={chipmunkThumb} alt="chipmunk-store" className="img" />
                                <div className="heading"> Chipmunk Store </div>
                                <div className="text"> Chipmunk store is India based clothing and apparel eCommerce business, specializing in casual clothing. </div>
                            </div>
                        </a>
                    </Zoom>
                </div>
            </div>

        </section>
    )
}

export default intro
