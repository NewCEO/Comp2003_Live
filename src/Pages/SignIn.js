import React, { useState } from "react";
// import sgMail from '@sendgrid/mail';
import { useNavigate } from 'react-router-dom'
import "../CSS/login.css"
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




const SignIn = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    // const sendConfirmationEmail = () => {
    //     // Validate the email
    //     if (!email) {
    //         alert('Please enter a valid email address.');
    //         return;
    //     }

    //     // Send the confirmation email
    //     const sgMail = require('@sendgrid/mail');
    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //     const msg = {
    //         to: email,
    //         from: 'Dskafos@dskafos.com', // Change to your verified sender
    //         subject: 'Welcome to DSKAFOS',
    //         text: 'Thank you for signing up!',
    //         html: '<strong>Thank you for signing up!</strong>',
    //     };

    //     sgMail
    //         .send(msg)
    //         .then(() => {
    //             console.log('Email sent');
    //             alert('Confirmation email sent. Please check your inbox.');
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             alert('An error occurred while sending the confirmation email.');
    //         });
    // };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleClick = () => {
        // sendConfirmationEmail();
        navigate('/dashboard');
    };

    return (
        <>

            <div className="left-div">
                <Navbar.Brand href="/"> <img
                    src={logo}
                    className="d-inline-block align-top mt-3"
                    alt="Dskafos logo"
                />
                </Navbar.Brand>
                <div className='hero-text'>
                    <span>Welcome to</span>
                    <span className='strip'></span>
                    <h3>DSKAFOS</h3>
                </div>
            </div>
            <div className="right-div">
                <div className="login-form-header">
                    <h3>
                        Create an Account
                    </h3>
                    <p>Already have an account? <span ><Link className="link-text" to="/login">Click here to log in, </Link></span> it takes less than a minute.</p>
                </div>
                <Stack direction="vertical" gap={2}>
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="Text" />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleEmailChange} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="login-btn" onClick={handleClick}>
                            Sign Up
                        </Button>
                        <div className="options">
                            <h5 className="signIn-options">Sign Up Options</h5>
                            <Button className="gsign-in" variant="outline-primary"><FontAwesomeIcon icon={faGoogle} /> Sign Up With Google</Button>
                        </div>
                        <div className="or-sign">
                            <hr className="or-line" />
                            <span className="or-text">or</span>
                            <hr className="or-line" />
                        </div>
                        <div className="socialdiv-sign-in">
                            <small>sign in with social media</small>
                            <div className="social-icons">
                                <FontAwesomeIcon icon={faGoogle} size="lg" />
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </div>

                        </div>
                    </Form>
                </Stack>

            </div>

        </>
    )


}

export default SignIn;