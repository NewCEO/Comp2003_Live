import React, { useState, Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../CSS/ProductInfo.css'
import Imgslider from '../Components/Slider'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Container, Row } from 'react-bootstrap';


function ProductInfo() {
    const [position, setPosition] = useState('middle-center');

    return (
        <>
            <ToastContainer className="p-3" position={position}>
                <Toast className='toast'>
                    <Toast.Body>
                        <Imgslider />
                        <Container>
                            <div className='Product-title'>
                                <span>
                                    £300,000</span>
                                <h1>The 340 HT</h1>
                                <p>The 340 has voluptuous curves and are beautifully offset by clearly defined,crisp running lines that make an indelible first impression. Demonstrating Birchwood’s renowned flexibility, the 340 is available with or without a hard top, This feature allows the boat to be commissioned for pure sporting fun or with the practicality of a cockpit canopy. Below deck, a double cabin and convertible dinette sleep four in comfort while the spacious exterior includes a bathing platform and generous seating and sun lounging area. Either option provides an exhilarating ride with unrivaled comfort and accommodation.</p>
                            </div>

                            <div className='right-card-div'>
                                <Row className='product-card-div' style={{ marginTop: '3rem' }}>
                                    <Card style={{ width: '6rem' }}>
                                        <Card.Body class="product-cardbody">
                                            <span>Fuel type</span>
                                            <h5>Diesel</h5>
                                        </Card.Body>

                                    </Card>

                                    <Card style={{ width: '6rem' }}>
                                        <Card.Body class="product-cardbody">
                                            <span>Fuel tank</span>
                                            <h5>600L</h5>
                                        </Card.Body>

                                    </Card>

                                    <Card style={{ width: '6rem' }}>
                                        <Card.Body class="product-cardbody">
                                            <span>Generator</span>
                                            <h5>4.00kw</h5>
                                        </Card.Body>

                                    </Card>

                                    <Row className='product-card-div'>
                                        <Card style={{ width: '6rem' }}>
                                            <Card.Body class="product-cardbody">
                                                <span>Draft</span>
                                                <h5>3.11ft</h5>
                                            </Card.Body>

                                        </Card>

                                        <Card style={{ width: '6rem' }}>
                                            <Card.Body class="product-cardbody">
                                                <span>Length Overall</span>
                                                <h5>11m / 36 ft</h5>
                                            </Card.Body>

                                        </Card>

                                        <Card style={{ width: '6rem' }}>
                                            <Card.Body class="product-cardbody">
                                                <span>Displacement</span>
                                                <h5>4.7T</h5>
                                            </Card.Body>

                                        </Card>
                                    </Row>
                                </Row>
                            </div>
                        </Container>


                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default ProductInfo;