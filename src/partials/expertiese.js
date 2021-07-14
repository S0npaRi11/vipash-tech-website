import React from 'react';
import Fade from 'react-reveal/Fade'

import { IoDesktopOutline, IoCodeSlashOutline, IoCartOutline, IoSearchCircleOutline, IoSpeedometerOutline, IoPhonePortraitOutline } from 'react-icons/io5'

const expertiese = () => {
    return (
        <section id="expertiese">

            <h2 className="heading"> What do we offer </h2>
            <p className="sub-heading"> We offer web solutions that are perfectly crafted for your business </p>

            <div className="container">
                <div className="grid-23 mgrid p-tb-30">

                    <Fade up duration={800} delay={0}>
                        <div className="card">
                            <div className="icon"> <IoDesktopOutline /> </div>
                            <div className="heading"> Design </div>
                            <div className="text"> World class UI/UX Design solutions, following best-in-class processes and practices </div>
                        </div>
                    </Fade>
    
                    <Fade up duration={800} delay={50}>
                        <div className="card">
                            <div className="icon"> <IoCodeSlashOutline /> </div>
                            <div className="heading"> Development </div>
                            <div className="text"> From static and dynamic websites to custom web services, made with latest technology & professional experience in multeity & budget range. </div>
                        </div>
                    </Fade>
                    
                    <Fade up duration={800} delay={100}>
                        <div className="card">
                            <div className="icon"> <IoCartOutline /> </div>
                            <div className="heading"> eCommerce </div>
                            <div className="text"> Wide spectrum of our eCommence end-to-end solution with fully customized platform to fit in your requirments as well as in your budget range. </div>
                        </div>
                    </Fade>
                    
                    <Fade up duration={800} delay={150}>
                        <div className="card">
                            <div className="icon"> <IoSearchCircleOutline /> </div>
                            <div className="heading"> SEO ready </div>
                            <div className="text"> Digital marketing will be your next goal to attain once your website ready. SEO is one of the most important part of your digital marketing campaing. </div>
                        </div>
                    </Fade>
    
                    <Fade up duration={800} delay={200}>
                        <div className="card">
                            <div className="icon"> <IoPhonePortraitOutline /> </div>
                            <div className="heading"> Mobile first approch </div>
                            <div className="text"> There are estimated 760 million smartphone users in India and 3.8  billion worldwide. Considering this, we design our products keeping mobile users in mind. </div>
                        </div>
                    </Fade>
                   
                    <Fade up duration={800} delay={250}>
                        <div className="card">
                            <div className="icon"> <IoSpeedometerOutline /> </div>
                            <div className="heading"> Fast and responsive </div>
                            <div className="text"> Our services are build to be fast and reliable, to enhance the user experience. </div>
                        </div>
                    </Fade>
                    
    
                </div>
            </div>

            {/* <div className="toTop">
               <a href="#hero"> <i className="las la-arrow-up"></i> </a>
            </div> */}

        </section>
    )
}

export default expertiese
