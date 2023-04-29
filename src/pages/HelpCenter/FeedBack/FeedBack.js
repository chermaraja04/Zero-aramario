import React, { useState } from "react";
import "./FeedBack.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";


export default function FeedBack() {

    const [showReturnPolicy, setShowReturnPolicy] = useState(true);
    const [showReturnExchange, setShowReturnExchange] = useState(false);
    const [showExchange, setShowExchange] = useState(false);
    const [showReturn, setShowReturn] = useState(false);


    // function onClickStartRetunr() {
    //     setShowReturnPolicy(false);
    //     setShowReturnExchange(true);
    // }
    // function onClickExchange() {
    //     setShowExchange(true);
    //     setShowReturn(false);
    // }
    // function onClickReturn() {
    //     setShowReturn(true);
    //     setShowExchange(false);
    // }

    return (        
                    <Col xxl={5} xl={4} lg={8} md={12} sm={12} xs={12}>

                        <section>

                            <h4 className="fw-bold-x mb30">FEEDBACK</h4>

                            <p className="fw-bold-x">Do tell us about your experience, for our future endurance. We are a young team, we learn things everyday around us.</p>


                            <Form className="mt-5 mb-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="First Name*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email*" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control as="textarea" type="password" placeholder="Elaborate your experience. We wish to learn more from our customers." />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                <p className="text-grey">This would help us to grow, in a good way.</p>
                                <Button className="mt-4 submit-btn" variant="primary" type="button">
                                    Submit
                                </Button>
                            </div>
                        </section>
                    </Col>   
    );
}