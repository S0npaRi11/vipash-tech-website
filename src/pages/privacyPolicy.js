import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const privacyPolicy = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="laoder"> Loading... </div>}>  

            <Helmet>
                <title> Privacy policy - Vipash Technologies </title>
            </Helmet>

            <SecondaryNav />

            <Header heading={ 'Privacy Policy' }/>

            <div id="content">
                <div className="container">

                    <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
                    <p><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></p>
                    <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.</p>
                    <p>&nbsp;</p>
                    <h3>When do we collect information?</h3>
                    <p>We collect information from you when you register on our site, place an order, fill out a form, Use Live Chat or enter information on our site.</p>
                    <p>&nbsp;</p>
                    <h3>How do we use your information?</h3>
                    <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
                    <ul>
                    <li>To quickly process your transactions.</li>
                    <li>To send periodic emails regarding your order or other products and services.</li>
                    <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h3>How do we protect your information?</h3>
                    <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p>
                    <p>We use regular Malware Scanning.</p>
                    <p>We do not use an SSL certificate</p>
                    <p>&bull; We do not need an SSL because:</p>
                    <p>We don't create service registration through our main website.</p>
                    <p>&nbsp;</p>
                    <h3>Do we use 'cookies'?</h3>
                    <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
                    <p><br />We use cookies to:</p>
                    <ul>
                    <li>&nbsp;Understand and save user's preferences for future visits.</li>
                    </ul>
                    <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
                    <p><br /><strong>If users disable cookies in their browser:</strong></p>
                    <p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.</p>
                    <p>&nbsp;</p>
                    <h3>Third-party disclosure</h3>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>
                    <p><strong>Third-party links</strong></p>
                    <p>We do not include or offer third-party products or services on our website.</p>
                    <p><strong>Google</strong></p>
                    <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en</p>
                    <p>We have not enabled Google AdSense on our site but we may do so in the future.</p>
                    <p>&nbsp;</p>
                    <h3>California Online Privacy Protection Act</h3>
                    <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</p>
                    <p><br />According to CalOPPA, we agree to the following:</p>
                    <p>Users can visit our site anonymously.</p>
                    <p>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</p>
                    <p>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</p>
                    <p><br />You will be notified of any Privacy Policy changes:</p>
                    <ul>
                    <li>&nbsp;On our Privacy Policy Page</li>
                    </ul>
                    <p>Can change your personal information:</p>
                    <ul>
                    <li>By emailing us</li>
                    <li>By calling us</li>
                    <li>By logging in to your account</li>
                    <li>By chatting with us or by sending us a support ticket</li>
                    </ul>
                    <p><br /><strong>How does our site handle Do Not Track signals?</strong></p>
                    <p>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>
                    <p><br /><strong>Does our site allow third-party behavioral tracking?</strong></p>
                    <p>It's also important to note that we do not allow third-party behavioral tracking</p>
                    <p>&nbsp;</p>
                    <h3>COPPA (Children Online Privacy Protection Act)</h3>
                    <p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
                    <p>We do not specifically market to children under the age of 13 years old.</p>
                    <p>&nbsp;</p>
                    <h3>Fair Information Practices</h3>
                    <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
                    <p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
                    <p>We will notify you via email</p>
                    <ul>
                    <li>Within 1 business day</li>
                    </ul>
                    <p>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>
                    <p>&nbsp;</p>
                    <h3>CAN SPAM Act</h3>
                    <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
                    <p>We collect your email address in order to:</p>
                    <p>To be in accordance with CANSPAM, we agree to the following:</p>
                    <p><br />If at any time you would like to unsubscribe from receiving future emails, you can email us at</p>
                    <p>and we will promptly remove you from ALL correspondence.</p>

                    <br />

                    <h3>Contacting Us</h3>
                    <p>If there are any questions regarding this privacy policy, you may contact us using the information below.</p>

                </div>
            </div>

            <SecondaryFooter />

            </Suspense>
        </React.Fragment>
    )
}

export default privacyPolicy
