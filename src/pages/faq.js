import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))
const Header = lazy(() => import('../partials/header'))

const faq = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader">  Loading... </div>}>

            <Helmet>
                <title> FAQ - Vipash Technologies </title>
            </Helmet>

            <SecondaryNav />

            <Header  heading={'FAQ'}/>

            <div id="content">
                <div className="container">

                    <p> 
                        <strong> Q: Does my business need a website? </strong> <br />
                        A: Be it a small business, a niche business or a large company, everyone can benifit from a website.
                    </p>

                    <br />

                    <p>
                        <strong> Q: Why a website is necessary to my business? </strong> <br />
                        A: The reasons for a business website:
                        <ul>
                            <li> A Website Proves Your Brand Credibility </li>
                            <li> Businesses with a Website are Easily Accessible </li>
                            <li> You can Showcase Your Products/Services the Best Way Possible </li>
                        </ul>
                    </p>

                    <br />

                    <p>
                        <strong> Q: What are the refund policies? </strong> <br />
                        A: You can red them <Link to="/return-policy"> here </Link>.
                    </p>

                    <br />
                    <p>
                        <strong> Q: What type of businesses need a website? </strong> <br />
                        A: Every type of business can benifit from a website.
                    </p>

                    <br />

                    <p>
                        <strong> Q: How much does it costs? </strong> <br />
                        A: The website development cost depends on multiple factors, such as project scale, development time, etc. <br />
                        The cost can be between the range &#8377;40,000 - &#8377;85,000 depending on the project.
                    </p>

                    <br />

                    <p>
                        <strong> Q: Do you provide online marketing services? </strong> <br />
                        A: No. We currently do not provide such services.
                    </p>

                    <br />

                    <p>
                        <strong> Q: What is SEO? </strong> <br />
                        A: Search Engine Optimization (SEO) helps to make your website visible and easily accessable on the internet.
                    </p>

                    <br />

                    <p>
                        <strong> Q: What types of businesses need an eComeerce website? </strong> <br />
                        A: E-Commerce websites are suitable for retail / trading businesses.
                    </p>

                    <br />

                    <p>
                        <strong> Q: How much time does it take to develop a website? </strong> <br />
                        A: The time to develop a website varies depending on the project scale and many other factors. <br />
                        The average time to develop a website will be 15 to 20 working days ( 2 to 3 weeks ).
                    </p>

                    <br />

                    <p>
                        <strong> Q:  Do I need business license for having a ecommerce website? </strong> <br />
                        A: No. You don't need a business license for a eCommerce website.
                    </p>

                    <br />

                    <p>
                        <strong> Q: Why does a website needs maintainance? </strong> <br />
                        A: To make sure your website is always visible and accessable on the internet, maintainance is necessary.
                    </p>

                    <br />

                    <p>
                        <strong> Q: How much does it costs for maintance? </strong> <br />
                        A: Depends on the project itself.
                    </p>

                    <br />

                </div>
            </div>

            <SecondaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default faq
