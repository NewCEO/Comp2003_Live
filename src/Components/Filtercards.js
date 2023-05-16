import React, { useState } from "react";
import "../CSS/Filtercards.css";
import FilterBar from "../Components/Filterbar";
import rawData from "../mock-data.json";
// import Navbar from '../Components/LandingNav';
import logo from '../Assets/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import '../CSS/ProductInfo.css';
import Imgslider from '../Components/Slider'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons';





function Filtercards(props) {
  const [typeFilter, setTypeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [position] = useState('middle-center');
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [selectedBoat, setSelectedBoat] = useState(null);



  const filteredData = rawData
    .filter((boat) => {
      if (!typeFilter && !modelFilter && !locationFilter.length && !priceFilter) {
        return true;
      }

      let isTypeMatched = true;
      let isModelMatched = true;
      let isLocationMatched = true;
      let isPriceMatched = true;

      if (typeFilter && boat.type !== typeFilter) {
        isTypeMatched = false;
      }

      if (modelFilter && boat.name !== modelFilter) {
        isModelMatched = false;
      }

      if (locationFilter.length && !locationFilter.includes(boat.location)) {
        isLocationMatched = false;
      }

      if (priceFilter) {
        const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
        if (boat.price < minPrice || boat.price > maxPrice) {
          isPriceMatched = false;
        }
      }

      return isTypeMatched && isModelMatched && isLocationMatched && isPriceMatched;
    })

    .map((boat) => (
      <div key={boat.id} className="card">
        <img src={boat.image} alt={boat.name} />
        <h2 style={{ fontFamily: 'Montserrat', marginTop: '10px' }} >{boat.name}</h2>
        <div className="card-details">
          <p style={{ marginLeft: '5px' }}>Location: {boat.location}</p>
          <p style={{ marginLeft: '5px' }}>Price: ${boat.price.toLocaleString()}</p>
          <button className="view-details" onClick={() => handleFilter(null, "details", false, boat)}>
            View Details
          </button>
        </div>
      </div>
    ));




  const handleFilter = (value, type, isChecked, boat) => {
    switch (type) {
      case "type":
        setTypeFilter(value);
        break;
      case "model":
        setModelFilter(value);
        break;
      case "location":
        const updatedLocationFilters = isChecked
          ? [...locationFilter, value]
          : locationFilter.filter((location) => location !== value);
        setLocationFilter(updatedLocationFilters);
        break;
      case "price":
        setPriceFilter(value);
        break;
      case "details":
        setSelectedBoat(boat);
        setShowA(true);
        break;
      case "reset":
        setTypeFilter("");
        setModelFilter("");
        setLocationFilter([]);
        setPriceFilter("");
        break;
      default:
        break;
    }
  };



  return (
    <>
      <Navbar.Brand href="/">
        <div className="header">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Dskafos logo"
          />
          <h1>The Range</h1>
        </div>
      </Navbar.Brand>
      <div className="page">

        <div className="filter-bar">
          <FilterBar handleFilter={handleFilter} />
        </div>
        <div className="card-list">
          {filteredData.length > 0 ? filteredData : <p>No results found.</p>}
        </div>
      </div>
      <ToastContainer className="p-3" position={position}>
        {selectedBoat && (
          <Toast className='toast' show={showA} onClose={toggleShowA} selectedBoat={selectedBoat}>
            <FontAwesomeIcon icon={faMultiply} className='icon' style={{ float: "right", marginBottom: '5px' }} onClick={toggleShowA} />

            <Toast.Body>
              <Imgslider />
              <Container className="product_container">
                <div className='Product-title'>
                  <p className="product_price">
                    ${selectedBoat.price.toLocaleString()}</p>
                  <h1>{selectedBoat.name}</h1>
                  <p className="product_price">{selectedBoat.location}</p>
                  <description className="product_description">{selectedBoat.description}</description>
                </div>

                <div className='right-card-div'>
                  <Row className='product-card-div' style={{ marginTop: '4.5rem' }}>
                    <Card className="productcard" style={{ width: '6.5rem' }}>
                      <Card.Body class="product-cardbody">
                        <span>Fuel type</span>
                        <h5>Diesel</h5>
                      </Card.Body>

                    </Card>

                    <Card className="productcard" style={{ width: '6.5rem' }}>
                      <Card.Body class="product-cardbody">
                        <span>Fuel tank</span>
                        <h5>600L</h5>
                      </Card.Body>

                    </Card>

                    <Card className="productcard" style={{ width: '6.5rem' }}>
                      <Card.Body class="product-cardbody">
                        <span>Generator</span>
                        <h5>4.00kw</h5>
                      </Card.Body>

                    </Card>

                    <Row className='product-card-div'>
                      <Card className="productcard" style={{ width: '6.5rem' }}>
                        <Card.Body class="product-cardbody">
                          <span>Draft</span>
                          <h5>3.11ft</h5>
                        </Card.Body>

                      </Card>

                      <Card className="productcard" style={{ width: '6.5rem' }}>
                        <Card.Body class="product-cardbody">
                          <span>Length Overall</span>
                          <h5>11m / 36 ft</h5>
                        </Card.Body>

                      </Card>

                      <Card className="productcard" style={{ width: '6.5rem' }}>
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
        )}
      </ToastContainer>

    </>
  );
}

export default Filtercards;
