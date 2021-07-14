import React from 'react'
import { Link } from 'react-router-dom'
import { IoEllipsisHorizontalSharp, IoInformationCircleOutline, IoMailOutline, IoCogOutline, IoDocumentTextOutline } from 'react-icons/io5'

const sideNav = () => {

    // const [toggle, setToggle] = useState(false)

    // const toggleHam = (e) => {
    //     e.preventDefault()

    //     setToggle(!toggle)
    // }

    return (
        <div className="hamburger visibleForMobile">
            <div className="container">
                <ul>
                {/* <li> <a onClick={ toggleHam } id="hamClose"> <IoEllipsisHorizontalSharp /> </a> </li> */}
                    {/* <li> <IoEllipsisHorizontalSharp /> </li> */}
                    {/* <li> <a href="#" className="logo"> <img src={logo} alt="logo"/> </a> </li> */}
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
