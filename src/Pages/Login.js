import React from "react";
import "../CSS/login.css"
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../Assets/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




const Login = () => {

    return (
        <>

            <div className="left-div">
                <Navbar.Brand href="/"> <img
                    src={logo}
                    className="d-inline-block align-top"
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
                        Sign In
                    </h3>
                    <p>Don’t have an account? <span ><Link className="link-text" to="/signup">Create an account,</Link></span> it takes less than a minute.</p>
                </div>
                <Stack direction="vertical" gap={8}>
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="login-btn" type="submit">
                            Login
                        </Button>
                        <div className="options">
                            <h5 className="signIn-options mb-3">Sign-in Options</h5>
                            <Button className="gsign-in" variant="outline-primary">  <FontAwesomeIcon icon={faGoogle} />   Sign In With Google</Button>
                        </div>
                        <div className="or-row">
                            <hr className="or-line" />
                            <span className="or-text">or</span>
                            <hr className="or-line" />
                        </div>
                        <div className="socialdiv">
                            <small>sign in with social media</small>

                            <div className="social-icons" >
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

export default Login;