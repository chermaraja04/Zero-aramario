import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
    return (
        <section className="mt-5">
            <section className="terms-condtions-container ">

                <Container className="w-75">
                    <h1 className="text-uppercase">PRIVACY POLICY</h1>

                    <p className="fw-bold-x mt-4">General Policy</p>

                    <p className="mt-4">Protecting your privacy is our primary concern. We have accordingly developed this Privacy Policy to protect your personal information and ensure its confidentialilty remains. Our privacy policy is in compliance and in accordance with the laws of various legal jurisdictions wherein there is a place of business. We will take all reasonable efforts and steps in protecting your privacy on the systems and the website controlled by us. We shall not be held accountable with respect to any liabilities or claims or damages which may arise due to any unauthorized usage or unlawful disclosures of your personal and confidential information made by third parties who are not subject to our control, for example advertisers and websites that have links to our Website. Please note that the information and privacy practices of our business partners, advertisers, sponsors or other sites to which we provide hyperlinks, may be different from ours and our obligations do not extend to any third party. Our privacy policy is subject to change, modification, alteration at any time without prior notice to any party. To ensure that you are apprised of any changes made to the privacy policy, you are requested to kindly review the policy along with its terms and conditions periodically.</p>


                    <p className="fw-bold-x mt-4">We categorise information about you (collectively referred to as “Personal Information”) as follows:</p>

                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x mb-0" >(a)</p>  </Col>
                        <Col xs={11}> <p className="mb-0"><span className="fw-bold-x">Profiling information</span> Information which you provide when you register for a Service, which may include some or all of the following: -Information about your personal identity such as gender, marital status, age, preferences, likes and dislikes etc.; - Your financial information such as your banking details and any information relating to your income and lifestyle levels; and - Your contact details such as your physical addresses, postal addresses, telephone and fax numbers and the like. - In the case of Facebook aligned services (if so opted by you), publicly available information of your friends, their likes and dislikes, etc. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(b)</p>  </Col>
                        <Col xs={11}><p ><span className="fw-bold-x"> Payment and Account Information: </span> Your account history with us including (without limitation) all billing information and communications, payment history etc. We maintain this in encrypted form on secure servers.</p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(c)</p>  </Col>
                        <Col xs={11}> <p ><span className="fw-bold-x"> Service Usage:</span> Information about your navigation using our Services, for example the URLs of websites, which you visit and from which you request downloads. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(d)</p>  </Col>
                        <Col xs={11}> <p ><span className="fw-bold-x"> Log information:</span> Information such as your web request, IP address, browser type, browser language, date and time of request.</p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(e)</p>  </Col>
                        <Col xs={11}> <p ><span className="fw-bold-x">Transactional Information:</span> Transactional history (other than banking details) about your e-commerce activities.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x mb-0" >(f)</p>  </Col>
                        <Col xs={11}>  <p ><span className="fw-bold-x">Correspondence Information: </span> Content, information about your correspondents, and the destination/origin of communications between you and any other person using our Services, which include email communications, blog, chat room and discussion board communications, instant message communications, experts forum communications, faxmail communications, membership of mailing lists etc.</p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(g)</p>  </Col>
                        <Col xs={11}>   <p ><span className="fw-bold-x"> User IDs:</span>  Your usernames, passwords, email addresses and other security-related information used by you in relation to our Services. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(h)</p>  </Col>
                        <Col xs={11}><p > <span className="fw-bold-x">Stored Information:</span>   Data either created by you or by a third party and which you wish to store on our servers such as image files, documents etc.</p></Col>
                    </Row>

                    <p className="fw-bold-x mt-4">We only collect your Personal Information to conduct our business and to enable us to deliver and improve our Services. We do not for any reason whatsoever sell your Personal Information to any third party or otherwise trade on it.</p>
                    <p className="fw-bold-x mt-4">By accepting the Terms of Service you agree that we may collect and store your Personal Information as long as you use our Services subject to the limitations set out in this Privacy Policy.</p>
                    <p className="mt-4 mb-0"><span className="fw-bold-x">2.1</span>  We collect your Profiling and Account Information for the following reasons:</p>

                    <Row>
                        <Col xs={1} className="list-width"><p className=" fw-bold-x" >(a)</p>  </Col>
                        <Col xs={11}><p > We need your identity details, contact details, banking information and account history to manage our relationship with you and provide Services to you. We may use this information for suggesting products that you might like on our website. We will only disclose this information as provided below. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(b)</p>  </Col>
                        <Col xs={11}><p >We use certain of your information in an aggregated form to compile statistical and demographical profiles for our business and marketing activities. We may disclose such information about you, provided that the information is in an aggregated form that is not capable of being used or interpreted in such a manner as to identify you.</p></Col>
                    </Row>

                    <p className="mt-2 mb-0"> <span className="fw-bold-x"> 2.2</span> We collect and store your Service Usage and Transactional Information to:</p>

                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(a)</p>  </Col>
                        <Col xs={11}><p > determine and verify the Service Charges payable by you and to administer our relationship with you.  </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(b)</p>  </Col>
                        <Col xs={11}><p > comply with any statutory or regulatory requirement. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(c)</p>  </Col>
                        <Col xs={11}><p >compile statistical and demographical profiles about you for our business and marketing activities and to customise our Services to you. While we are entitled to use such information about you for our own internal business purposes without limitation, we will only disclose it in an aggregated form which is not capable of being used or interpreted in such a manner as to identify you; and (d) monitor your use of our Services for the purposes of ensuring compliance with our Terms of Service.</p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(d)</p>  </Col>
                        <Col xs={11}><p >(d) monitor your use of our Services for the purposes of ensuring compliance with our Terms of Service.</p></Col>
                    </Row>


                    <p className="mt-2 mb-0"> <span className="fw-bold-x"> 2.3</span> We collect and store your Correspondence Information and Personal Identifiers to:</p>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(a)</p>  </Col>
                        <Col xs={11}><p >  (a) comply with our obligations under law; and </p></Col>
                    </Row>
                    <Row>
                        <Col xs={1} className="list-width"><p className="fw-bold-x" >(b)</p>  </Col>
                        <Col xs={11}><p > monitor your use of our Services in order to ensure your compliance with our Terms of Service. Any Personal Information which we collect and which we may use in an aggregated format ensuring you are not individually identified is our property. We may use it, in our sole discretion and without any compensation to you, for any legitimate purpose including (without limitation) the commercial sale thereof to third parties. Sometime we use “cookies” so that we can provide you with more customised information when you return to our website. “Cookies” are used to store user preferences and to track user trends, so as to enhance your interactive experience and generally improve our Services to you. You can set your browser to notify you when you are sent a “cookie”, giving you the chance to decide whether or not to accept it. If you do accept a “cookie”, you thereby agree to our use of any Personal Information collected by us using that Cookie. You may update your Profiling Information at any time on the website. You acknowledge and agree that in the interests of improving personalisation and Service efficiency, we may, under controlled and secure circumstances, share your Personal Information with our affiliates (an entity which is our subsidiary or holding company or a subsidiary of our holding company or an entity which controls, is controlled by or is under common control with us).</p></Col>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <p>We collect information from you when you register on our Site with your Facebook id or make an order for products on our Site. When ordering products or login with your Facebook id, we use your Personal Information such as email id, name, birthday, first name, last name and gender to provide you with information, process your orders and for any related or ancillary purposes, including, with limitation.</p>
                        </Col>
                    </Row>

                    <p className="mb-0 fw-bold-x">General Exception</p>
                    <p className="mb-0 mt-4"> If we are required to intercept, disclose, monitor and/or store your Personal Information: </p>
                    <p className="mb-0"> <span className="fw-bold-x">(a) </span> by law;</p>
                    <p className="mb-0"> <span className="fw-bold-x">(b)</span> to conduct our business;</p>
                    <p className="mb-0"> <span className="fw-bold-x">(c) </span>to secure our systems; or </p>
                    <p className="mb-0"> <span className="fw-bold-x">(d)</span> to enforce our own rights, we will do so in the manner as prescribed by law. </p>


                    <Row className="mt-4">
                        <Col>
                            <p>Such interception, disclosure, monitoring and storage may take place without your knowledge. In that case, we will not be liable to you or any third party for any damages howsoever arising from such interception, disclosure, monitoring and storage. In order to ensure that all our Users comply with the Terms of Service, we may monitor your Personal Information to the extent that this may be required to determine compliance and/or to identify instances of non-compliance. To ensure that the security and integrity of our Services are safeguarded, we may monitor your Personal Information. This monitoring may include (without limitation) the filtering of incoming and outgoing electronic data messages to identify, limit and/or prevent the transmission of spam, viruses and/or unlawful, defamatory, obscene or otherwise undesirable material or content. We may under certain circumstances procure an element of the Services from a third party service provider. To the extent that it may be necessary, and solely for the purposes of providing the Service to you, you agree that we may disclose to such third party any of your Personal Information that may be necessary for the procurement of services from the third party.</p>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Footer />
        </section>






    )
}