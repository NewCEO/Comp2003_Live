import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Navbar from '../Components/LandingNav';
import "../CSS/usertype.css"
import { Container, Row, Col } from "react-bootstrap";

const Usertype = () => {
  console.log("Usertype component rendered");
  return (
    <>
      <div className="bg">
        <Navbar />
        <Row>
          <Col>
            <h1 className="usertype-text">What would you like to do ?</h1>
          </Col>
        </Row>
        <Container>
          <Row className="card-div">

            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>I'm a User</Card.Title>
                <Card.Text>
                  I need help picking out a vessel for a boat related activity.
                </Card.Text>
                <a href="/filtercard" className="stretched-link">
                </a>
              </Card.Body>
            </Card>





            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>I’m a Vendor</Card.Title>
                <Card.Text>
                  I offer boat related product and services and would like to join Birchwood Vendors.
                </Card.Text>
                <a href="/vendor" className="stretched-link">
                </a>
              </Card.Body>
            </Card>
            <p className="p-alert"> If you already have an account, Click <span>&nbsp;<Link to="/login" className="link-text">here</Link>&nbsp;</span>to Sign in</p>
          </Row>
        </Container>



      </div>

    </>
  );
};


export default Usertype;