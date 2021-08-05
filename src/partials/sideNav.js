import React from 'react'
import { Link } from 'react-router-dom'
import { IoInformationCircleOutline, IoMailOutline, IoCogOutline, IoDocumentTextOutline } from 'react-icons/io5'

const sideNav = () => {

    return (
        <div className="hamburger visibleForMobile">
            <div className="container">
                <ul>
                    <li>  <Link to="/about"> <IoInformationCircleOutline />  about </Link> </li>
                    <li> <Link to="/contact"><IoMailOutline /> contact </Link> </li>
                    <li> <Link to="/services"><IoCogOutline /> services </Link> </li>
                    <li> <Link to="/blog"><IoDocumentTextOutline /> blog </Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default sideNav
