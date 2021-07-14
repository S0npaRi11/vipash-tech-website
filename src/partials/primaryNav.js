import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { IoEllipsisVerticalSharp, IoEllipsisHorizontalSharp, IoInformationCircleOutline, IoMailOutline, IoCogOutline } from 'react-icons/io5'

// import logo from '../static/card-image.png'
import logo from '../static/Vipash-technologies-logo/2.jpg'


const primaryNav = () => {

    const [toggle, setToggle] = useState(false)

    const toggleHam = (e) => {
        e.preventDefault()

        setToggle(!toggle)
    }

    return (
        <nav>
            <div className="container">
                <ul>
                    <li> <Link to="/"> <img src={ logo } alt="logo" className="logo"/> </Link> </li>
                    <div className="visibleForMobile ham">
                        <IoEllipsisVerticalSharp onClick={ toggleHam } id="hamOpen"/>
                    </div>

                    <span className="nav-links hideWhenMobile">
                        <li> <NavLink to="/about" activeClassName="navActive"> about </NavLink> </li>
                        <li> <NavLink to="/contact" activeClassName="navActive"> contact </NavLink> </li>
                        <li> <NavLink to="/services" activeClassName="navActive"> services </NavLink> </li>
                        {/* <li> <Link to="/blog"> blog </Link> </li> */}
                    </span>

                </ul>
            </div>

            { toggle && <div className="hamburger visibleForMobile">
                <div className="container">
                    <ul>
                        <li> <a onClick={ toggleHam } id="hamClose"> <IoEllipsisHorizontalSharp /> </a> </li>
                        <li>  <NavLink to="/about" activeClassName="navActive"> <IoInformationCircleOutline />  about </NavLink> </li>
                        <li> <NavLink to="/contact" activeClassName="navActive"> <IoMailOutline /> contact </NavLink> </li>
                        <li> <NavLink to="/services" activeClassName="navActive"><IoCogOutline /> services </NavLink> </li>
                        {/* <li> <Link to="/blog"><IoDocumentTextOutline /> blog </Link> </li> */}
                    </ul>
                </div>
            </div>}
        </nav>
    )
}

export default primaryNav
