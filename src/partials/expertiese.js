import React from 'react';

import { IoDesktopOutline, IoCodeSlashOutline, IoCartOutline, IoSearchCircleOutline, IoSpeedometerOutline, IoPhonePortraitOutline } from 'react-icons/io5'

const expertiese = () => {
    return (
        <section id="expertiese">

            <h2 className="heading"> What do we offer </h2>
            <p className="sub-heading"> We offer web solutions that are perfectly crafted for your business </p>

            <div className="container">
                <div className="grid-23 mgrid">

                    <div className="card">
                        <div className="icon"> <IoDesktopOutline /> </div>
                        <div className="heading"> Design </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                    <div className="card">
                        <div className="icon"> <IoCodeSlashOutline /> </div>
                        <div className="heading"> Development </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                    <div className="card">
                        <div className="icon"> <IoCartOutline /> </div>
                        <div className="heading"> eCommerce </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                    <div className="card">
                        <div className="icon"> <IoSearchCircleOutline /> </div>
                        <div className="heading"> SEO ready </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                    <div className="card">
                        <div className="icon"> <IoPhonePortraitOutline /> </div>
                        <div className="heading"> Mobile first approch </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                    <div className="card">
                        <div className="icon"> <IoSpeedometerOutline /> </div>
                        <div className="heading"> Fast and responsive </div>
                        <div className="text"> Sone relevent text here </div>
                    </div>
    
                </div>
            </div>

            <div className="toTop">
               <a href="#hero"> <i className="las la-arrow-up"></i> </a>
            </div>

        </section>
    )
}

export default expertiese
