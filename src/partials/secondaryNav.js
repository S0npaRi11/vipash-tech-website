import logo from '../static/card-image.png'

const secondaryNav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li> <a href="#"> <img src={ logo } alt="logo" className="logo"/> </a> </li>
                    <div className="visibleForMobile">
                        <i className="las la-ellipsis-v" id="hamOpen"></i>
                    </div>

                    <span className="nav-links hideWhenMobile">
                        <li> <a href="#"> about </a> </li>
                        <li> <a href="#"> contact </a> </li>
                        <li> <a href="#"> services </a> </li>
                        <li> <a href="#"> blog </a> </li>
                    </span>

                </ul>
            </div>

            <div className="hamburger visibleForMobile">
                <div className="container">
                    <ul>
                        <li> <a href="#" id="hamClose"> <i class="las la-ellipsis-h"></i> </a> </li>
                        <li> <a href="#" className="logo"> <img src={logo} alt="logo"/> </a> </li>
                        <li>  <a href="./static-page.html"> <i class="las la-question-circle"></i>  about </a> </li>
                        <li> <a href="#"><i class="las la-mail-bulk"></i> contact </a> </li>
                        <li> <a href="#"><i class="las la-cogs"></i> services </a> </li>
                        <li> <a href="#"><i class="las la-blog"></i> blog </a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default secondaryNav
