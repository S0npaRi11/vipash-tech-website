import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import '../public/actions'

// import Home from './pages/home'
// import PrivacyPolicy from './pages/privacyPolicy'
// import ReturnPolicy from './pages/returnPolicy'
// import TermsAndConditions from './pages/termsAndConditions'
// import Services from './pages/services'
// import Contact from './pages/contact'
// import FAQ from './pages/faq'
// import About from './pages/about'
// import Complaint from './pages/complaint'
// import WebDev from './pages/websiteDevService'
// import Ecom from './pages/eCommerceService'

const Home = lazy(() => import('./pages/home'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'))
const ReturnPolicy = lazy(() => import('./pages/returnPolicy'))
const TermsAndConditions = lazy(() => import('./pages/termsAndConditions'))
const Services = lazy(() => import('./pages/services'))
const Contact = lazy(() => import('./pages/contact'))
const FAQ = lazy(() => import('./pages/faq'))
const About = lazy(() => import('./pages/about'))
const Complaint = lazy(() => import('./pages/complaint'))
const WebDev = lazy(() => import('./pages/websiteDevService'))
const Ecom = lazy(() => import('./pages/eCommerceService'))

function App() {
  return (
    <React.Fragment>

      <Helmet>
        <title> Vipash Technologies </title>
        <meta name="description" content="Vipash Technologies helps you to get your business online and make it available to the wider audience."/>
      </Helmet>

      <Router basename="vipash-tech-website">
        <Suspense fallback={<div className="loader"> Loading.... </div>}>
          <Switch>

            <Route exact path="/">
              <Home /> 
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route exact path="/services">
              <Services />
            </Route>

            <Route exact path="/services/web-development">
              <WebDev />
            </Route>

            <Route exact path="/services/ecommerce-development">
              <Ecom />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>

            <Route path="/return-policy">
              <ReturnPolicy />
            </Route>

            <Route path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>

            <Route path="/faq">
              <FAQ />
            </Route>

            <Route path="/complaint">
              <Complaint />
            </Route>

          </Switch>
        </Suspense>
      </Router>

    </React.Fragment>
  );
}

export default App;
