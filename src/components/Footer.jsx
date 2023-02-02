import React from 'react'
import Buds from './images/Buds.png';
import googleplay from './images/Google-Play-img.png';
import Appstore from './images/AppStore-img.png';
import Bleaumlogo from './images/Bleaum-logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <>
            <div className='Footer'>
                
                <div style={{ background: "#212e52", height: "450px", paddingLeft: "50px", paddingTop: "50px", display:"flex", textAlign:"start" }}>
                    <Container >
                        <Row>
                            <Col className='col-md-3'>
                                <div className='Logo'>
                                    <img src={Buds} style={{ width: "180px" }} />
                                </div> <br/>

                                <div>
                                <div style={{color:"white",width:"168px"}}>
                                708 E Main St Suite A & B, Henryetta, OK 74437, United States 
                                <div style={{fontWeight: "500",paddingTop:"25px" }}>
                                918.420.9660
                                </div>
                                </div>
                                </div>
                            </Col>
                            <Col>

                                <div className='col' style={{color: "white",textAlign:"start" }}>
                                    <ul style={{listStyleType:"none"}}>
                                        <li style={{ fontWeight: "700" }}>Company</li> <br/>
                                        <li>Contact Us</li><br/>
                                        <li>Terms & Conditions</li><br/>
                                        <li>Privacy Policy</li><br/>

                                    </ul>
                                </div>
                            </Col>

                            <Col>

                                <div className='col' style={{color: "white", textAlign:"start" }}>
                                    <ul style={{listStyleType:"none"}}>
                                        <li style={{ fontWeight: "700" }}>Quick Links</li> <br/>
                                        <li>Categories</li> <br/>
                                        <li>Deals</li> <br/>
                                        <li>Manufacturers</li> <br/>
                                        <li>Login / Sign Up</li> <br/>

                                    </ul>
                                </div>
                            </Col>

                            <Col>

                                <div className='col' style={{ color: "white", textAlign:"start" }}>
                                    <ul style={{listStyleType:"none"}}>
                                        <li style={{ fontWeight: "700" }}>Download our Application</li> <br/>
                                        <li>
                                            <div>
                                                <img src={googleplay} alt="" />
                                            </div>
                                        </li>
                                        <br/>
                                        <li>
                                            <div>
                                                <img src={Appstore} alt="" />
                                            </div>
                                        </li>
                                        <br/>
                                        <li>
                                            <div>
                                                <img src={Bleaumlogo} alt="" />
                                            </div>
                                        </li>
                                        <br/>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{color:"white", display:"flex", justifyContent:"Center"}}>
                        © Buds Craft 2023. All Rights Reserved.
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    )
}
