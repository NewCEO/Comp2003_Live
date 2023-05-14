import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import rawData from '../mock-data.json';
import FilterBar from './Sidebar 1.js';
import Navigation from './LandingNav';

function CardComponent() {
  return (
    <Container fluid className="mt-4">
      <Navigation />
      <Row>
        <Col md={3}>
          <FilterBar />
        </Col>
        <Col md={9}>
          <Row xs={1} md={2} className="g-4">
            {rawData.map((boat, index) => (
              <Col key={index}>
                <Card style={{ width: '100%', height: '350px' }}>
                  <Card.Img variant="top" src={boat.image} style={{ height: '60%', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{boat.name}</Card.Title>
                    <Card.Text>{boat.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">${boat.price}</h5>
                      <Button variant="primary">View Details</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CardComponent;
