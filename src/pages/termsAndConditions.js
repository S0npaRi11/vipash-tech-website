import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const termsAndConditions = () => {
    return (
        <React.Fragment>

            <Suspense fallback={<div className="loader"> Loading... </div>}> 

            <Helmet>
                <title> Terms & conditions - Vipash Technologies </title>
            </Helmet>
            
            <SecondaryNav />

            <Header heading={ 'Terms & Conditions' }/>

            <div id="content">
                <div className="container">
                    <p>Website completion will take number of working days to complete. Please mention your package properly while contacting us.<br />Content should be provided from client side.<br />Logo should be provided from client side. If you want to get your logo to be designed then please contact us.<br />A signature line will be embeded in the bottem of your website. If you wish to remove it , it will Extra cost to you.<br />All the websites will be SEO optimized. If you want result oriented and ranking based optimized designs, then take our SEO Plan as a addon with the website.<br />Client always take care for their website contents like matter,database we are not responsible for any dispute for this.<br />Whatever the hosting and domain prices display on are website these are not always remain same we reserve the rights to upgrade or downgrade the prices for hosting and domain and other products / services also.<br />Again and again changes in the content will be chargeable.</p>
                    <p>&nbsp;</p>
                    <h3>Report Abuse Policy</h3>
                    <p>Vipash Technologies provides a pltform to express their ideas and business details easily. If abusive behavior happens, we want to make it easy for people to report it to us. User can easily take a screenshot of the abuse or violation of our policy and share the details with us over email at info@vipashtech.com we will try our best to look after the issue as soon as possible.</p>
                    <p>Anyone can report abusive behavior directly from a email or support ticket.<br /><strong>What happens after I submit a report?</strong></p>
                    <p>After you submit a report, you will see a confirmation message from us alerting you that we received your report (it may take up to 24 hours before you see a message). We will review the reported account. If we determine that the account are in violation of our policies, we will take action (ranging from a warning to permanently suspending the staff member). You will receive a follow up notification from us if we need more information from you, or when we take action on the reported member.</p>
                    
                    <br />
                    <h3>Acceptable Usage Policy</h3>
                    <p>Vipash Technologies supports a system where all the services and information are need to be kept with in the staff member and client. We do not support our clients with sharing pricing or package details with other.</p>
                    <p>The information we ask while registring on our portal will be strictly use for your information and information related to your business growth which may include few promotional offers related to Vipash Technologies.</p>
                    <p>In general, acceptable use means respecting the rights of other users, the integrity of the facilities and contractual agreements. If an individual is found to be in violation of the Acceptable Use Policy, the agency will take disciplinary action, including the restriction and possible loss of project finance loss. A serious violation could result in more serious consequences. Individuals are also subject to laws governing many interactions that occur. These policies and laws are subject to change as government laws develop and change.</p>
                    <p>&nbsp;</p>
                    <h3>Acceptable Use</h3>
                    <p>You may use only the website, application or marketing for your business or commercial purpose.<br />You may not use another individual's account or customer information mentioned as portfolio or part of our design for your individual use.<br />You are individually responsible for appropriate use of all resources provided to you, including the files, server cPanel or Plesk Panel, Email ids &amp; website admin panel. Therefore, if you miss use the system you will be equaly responsible. <br />The company is bound by its contractual and license agreements respecting certain third party resources; you are expected to comply with all such agreements when using such resources.<br />You should make a reasonable effort to protect your passwords and to secure resources against unauthorized use or access. You must configure hardware and software in a way that reasonably prevents unauthorized users from accessing Vipash Technologies servers and computing resources.<br />You must not attempt to access restricted portions of the system, an operating system, security software or other administrative applications without appropriate authorization by the system owner or administrator.<br />You must comply with the policies and guidelines for any specific set of resources to which you have been granted access. When other policies are more restrictive than this policy, the more restrictive may policy takes place.<br />Using automated tools or softwares on the website or server is not considered as eithical practice for clients. If you use any of this automated tool to fill the form or to generate fake traffic may cause to shut down your website. <br />In case if we use our credit card to purchase resources for you, no other purchase should be processed and also the credentials will not be shared in that scenario.</p>
                    <p>&nbsp;</p>
                    <h3>STANDARD REFUND TERMS</h3>
                    <p>If any service purchased from Vipash Technologies, may be refunded only if cancelled within the following timeframe:</p>
                    <p><strong>Website Design Plans</strong> - Within 8 days of project confirmation payment processed. From which domain and hosting amount will be deducted as we will purchase it from 3rd party.</p>
                    <p><strong>Web Hosting</strong> - Within 30 days of service started.</p>
                    <p>You may cancel a product at any time, but a refund will only be issued if cancellation is requested within the refund timeframe specified for the applicable product, if available at all.</p>
                    <p>Note: Some products have different policies or requirements for a refund associated with them, including some products that are not eligible for a refund under any circumstance. Please see below for refund terms applicable to such products.</p>
                </div>
            </div>

            <SecondaryFooter />

            </Suspense>

        </React.Fragment>
    )
}

export default termsAndConditions
