import React, { useState } from "react";
import "./AboutUs.scss";
import { Col, Button } from "react-bootstrap";


export default function AboutUs() {

    return (
                             
                    <Col xxl={6} xl={6} lg={8} md={12} sm={12} xs={12}>
                        <section>
                            <h4 className="fw-bold-x mb30">ABOUT US</h4>
                            <p className="fw-bold-x mb-5">A longstanding love affair with colours and fashion are responsible for the start of all things at ZeroArmario. We are India’s freshest and trendiest online apparel company offering the latest styles in fashion. We cater to the fashion needs of the young and vibrant who dare to be bold, stylish and want nothing but the best.</p>
                            <ul className="return-points">
                                <li>
                                    We are always keeping our eyes and ears wide open, looking for the coolest treats to give you guys, our awesome customers. W source our products from several suppliers, big and small but usually in limited numbers, so you can be sure what you buy from us stays individual and original. So if you see something you like, we recommend you to grab it quickly as it may not be around for too long. We assure you whatver you buy from ZeroArmario is high grade merchandise.
                                </li>
                                <li>
                                    Most importantly, we consider you, our amazing customer to be at the centre of what we do. Suggestions for any new ranges, designs, brand improvement, styles, colours… are always welcome. Please feel Free to get in touch with us through email, instagram or calling us on the toll free number.
                                </li>
                            </ul>
                        </section>
                        <div className="text-left mt-5">
                            <p className="">To know more about us</p>
                            <Button className="visit-company" variant="primary" type="button">
                                Visit our company
                            </Button>
                        </div>
                    </Col>      
    );
}