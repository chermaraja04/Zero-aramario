import React, { useState } from "react";
import SideNavWithRoutingWidget from "../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";

import ReturnPolicy from "./ReturnPolicy/ReturnPolicy";
import RefundForm from "./RefundForm/RefundForm";
import TrackMyOrder from "./TrackMyOrder/TrackMyOrder";
import FaqCustomers from "./FaqCustomers/FaqCusomers";
import AboutUs from "./AboutUs/AboutUs";
import FeedBack from "./FeedBack/FeedBack";
import { FaExchangeAlt } from "react-icons/fa";
import Footer from "../../components/footer/Footer";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

const HelpCenter = () => {

    let menuItems = [
        {
            title: 'Our return policy',
            url: "/return-policy",
            id: "1"
        },
        {
            title: 'How refunds work',
            url: "/refunds",
            id: "2"
        },
        {
            title: 'Track my order / return',
            url: "/Track-my-order",
            id: "3"
        },
        {
            title: 'Feedbacks',
            url: "/Feedbacks",
            id: "4"
        },
        {
            title: 'FAQ - Customers',
            url: "/FAQ-Customers",
            id: "5"
        },
        {
            title: 'About us',
            url: "/About-us",
            id: "6"
        },
        {
            title: 'Careers',
            url: "/Careers",
            id: "7"
        }

    ]

    const [currIndex, setCurrIndex] = useState(0);
    const currentTab = (index) => {
        setCurrIndex(index)
    }
    return (
        // <Container className="pt-5 account-information-container">
        //     <p>Home / Account</p>
        //     <Row className="mt-5">
        //         <Col xxl={3} xl={3} lg={4} md={12} sm={12} xs={12}>
        //             <h2 className="text-uppercase">HELP CENTER</h2>
        //             <SideNavWithRoutingWidget menuData={menuItems} currentIndex={(e) => currentTab(e)} />

        //             <h6 className="logout-link">Log out</h6>
        //         </Col>
        //         <>
        //            
        //         </>
        //     </Row>
        // </Container>
        <>
            <Container fluid="md | sm | xs" className="pt-5 return-policy-container">
                <Row className="align-items-center">
                    <Col>
                        <p className="mb-0">Home <span className="fw-bold-x">/ Help Center</span></p>
                    </Col>
                    <Col className="text-center switch-block">
                        <Button className="switch-btn" variant="primary" type="button">
                            <FaExchangeAlt /> Switch
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xxl={3} xl={3} lg={4}>
                        <h2 className="text-uppercase mb30">Help Center</h2>
                        <SideNavWithRoutingWidget menuData={menuItems} currentIndex={(e) => currentTab(e)} />
                    </Col>

                    {currIndex === 0 && <ReturnPolicy />}
                    {currIndex === 1 && <RefundForm />}
                    {currIndex === 2 && <TrackMyOrder />}
                    {currIndex === 3 && <FeedBack />}
                    {currIndex === 4 && <FaqCustomers />}
                    {currIndex === 5 && <AboutUs />}

                </Row>

            </Container>
            <Footer/>
        </>


    )
}

export default HelpCenter;