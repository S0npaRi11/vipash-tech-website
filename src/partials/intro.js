import React from 'react';
import Zoom from 'react-reveal/Zoom'

import pmThumb from '../static/portfolio-thumbnails/s0npaRi11-portfolio-img.png'
import chipmunkThumb from '../static/portfolio-thumbnails/chipmunk-store-img.png'

const intro = () => {
    return (
        <section id="intro">
            <h2 className="heading"> Portfolio </h2>

            <div className="container">
                <div className="grid-12 mgrid p-tb-30">
                    <Zoom duration={800} delay={0}>
                        <a href="https://s0npari11.github.io/">
                            <div className="card">
                                <img alt="project-image" className="img" src={pmThumb}/>
                                <div className="heading"> Parag Mahale - Portfolio </div>
                                <div className="text"> A portfolio website keeping simplicity and easy-navigation in mind. </div>
                            </div>
                        </a>
                    </Zoom>

                    <Zoom duration={800} delay={200}>
                    <a href="https://chipmunkstore.com/">
                            <div className="card">
                                <img alt="project-image" className="img" src={chipmunkThumb}/>
                                <div className="heading"> Chipmunk Store </div>
                                <div className="text"> Chipmunk store is India based clothing and apparel eCommerce business, specializing in casual clothing. </div>
                            </div>
                        </a>
                    </Zoom>

                    {/* <Zoom duration={800} delay={400}>
                        <div className="card"> <div className="text"> Project 3 </div> </div>
                    </Zoom>

                    <Zoom duration={800} delay={600}>
                        <div className="card"> <div className="text"> Project 4 </div> </div>
                    </Zoom>

                    <Zoom duration={800} delay={800}>
                        <div className="card col-3"> More Projects <button> View More </button> </div>  
                    </Zoom> */}
                </div>
            </div>

        </section>
    )
}

export default intro
