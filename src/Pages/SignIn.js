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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
        };

        // Store form data in URL parameters
        navigate(`/dashboard?name=${formData.name}&email=${formData.email}`);

        const sgMail = require('@sendgrid/mail')
        const API_KEY = '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';
        sgMail.setApiKey(API_KEY)
        const msg = {
            to: `${formData.email}`, // Change to your recipient
            from: 'dskafos@dskafos.com', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    };

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'petalpurpose@gmail.com', // Change to your recipient
        from: 'Dskafos@dskafos.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" className="login-btn">
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