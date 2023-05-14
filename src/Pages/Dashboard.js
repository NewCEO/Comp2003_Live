import React, { useState } from 'react';
import "../CSS/Dashboard.css"
import Button from 'react-bootstrap/Button'
import boatsData from "../boat-owner.json"
import OwnerCard from '../Components/OwnerCard';
import user_avatar from '../Assets/user-avatar.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faHomeLgAlt, faQuestionCircle, faUpload, faWallet, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';



const Sidebar = ({ onChangePage }) => {

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">
          B
        </div>
        <hr />
        <div className="sidebar-icons">
          <div className="icon-container" onClick={() => onChangePage('Home')}>
            <FontAwesomeIcon icon={faHomeLgAlt} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Upload')}>
            <FontAwesomeIcon icon={faUpload} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Manage')}>
            <FontAwesomeIcon icon={faEdit} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Notifcation')}>
            <FontAwesomeIcon icon={faUserAlt} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Wallet')}>
            <FontAwesomeIcon icon={faWallet} className='icon' />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="user-welcome">Welcome Bryen</div>
      <div className="user-info">
        <img
          className="user-avatar"
          src={user_avatar}
          alt="User Avatar"
        />
        <span className="user-name">John Doe</span>
        <br />
      </div>
      <Row>
        <h1>

        </h1>
      </Row>

    </div>
  );
};

const HomePage = ({ page }) => {
  return (
    <div className='container-fluid homecard_div'>
      <Row>
        <Col>
          <Row>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card style={{ minHeight: '300px' }} className='dashboard-card'>
                <Card.Body>
                  <Card.Title style={{ textAlign: 'left' }} className='dashboard-card-title'>
                    Welcome to your Birchwood Dashboard. A verification mail has been sent to your inbox, if you haven’t received one, please click the button below to resend the verification mail.
                  </Card.Title>
                  <Card.Text className='dashboard-card-text'>
                    Please note you can’t move on to purchase without a successful verification.
                  </Card.Text>
                  <Button className='resend-btn'>Resend Verification Mail</Button>
                </Card.Body>

              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card style={{ minHeight: '280px' }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: 'left' }}>Product Wishlist</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faUpload} /></span>
                  <Card.Title className='promotions-card-title'>This is the upload tab, this is where you put up products before you promote them.</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faEdit} /></span>
                  <Card.Title className='promotions-card-title'>This is the listings tab where you can view and edit your current listings</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faUserAlt} /></span>
                  <Card.Title className='promotions-card-title'>This is profile tab, where you can view your profile info and summary of listings</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faWallet} /></span>
                  <Card.Title className='promotions-card-title'>This is the wallet tab, where you can track all money going in and out of your Dskafos account</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <div style={{ textAlign: 'right', marginTop: '40px' }}>
        <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '50px', color: 'red' }} />
      </div>


    </div>




  );
};

const UploadPage = ({ onAddBoat, handleChangePage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { boatName, address, price, description } = e.target.elements;

    const newBoat = {
      id: Math.floor(Math.random() * 10000),
      name: boatName.value,
      location: address.value,
      price: parseFloat(price.value),
      description: description.value,
    };

    onAddBoat(newBoat);
    e.target.reset();
    handleChangePage('Manage');
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <div>
        <label htmlFor="boatName">Boat Name:</label>
        <input type="text" id="boatName" name="boatName" required />
      </div>
      <div>
        <label htmlFor="address">Location:</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};



const Manage = ({ boatsData, onUpdate, onDelete }) => {
  return (
    <>
      <div className="manage">
        {boatsData.map((boat) => (
          <OwnerCard key={boat.id} boat={boat} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}



const Account = ({ page, choice, company }) => {
  console.log('account-dashboard', company, choice)
  const selectedChoice = choice.map((choice) => {
    if (choice.selected === true) {
      return (
        <p key={choice.id}>{choice.name}</p>
      )
    }
    return null;
  });
  return (
    <div className="account">
      <div className="account-card">
        {company[1].selected && <h2>{company[1].name}</h2>}
        {company[0].selected && <h2>I work Independently</h2>}
        <p><b>Services:</b></p>
        {selectedChoice}
        <p><b>Number of boats:</b>:</p>
        <p>{boatsData.owner.boats.length}</p>
        <div className="account-card-buttons">
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

const Wallet = ({boatsData,money}) => {

  let total = 0
  boatsData.forEach((boat) => {
    total += boat.price;
  });

  let fommattedMoney = `$${money.toLocaleString()}`;
  let formattedTotal = `$${total.toLocaleString()}`;
  
  return (
    <div className="wallet">
      <div className="wallet-card">
        <h1>Total money in account</h1> <h2>{fommattedMoney}</h2>
        <h1>Value of all boats</h1> <h2>{formattedTotal}</h2>
      </div>

    </div>
  );
};

const MainPage = ({ page, boatsData, onAddBoat, onUpdate, onDelete, handleChangePage, choice, company,money }) => {
  return (
    <div className="main-page">
      {page === 'Home' && <HomePage />}
      {page === 'Upload' && <UploadPage onAddBoat={onAddBoat} handleChangePage={handleChangePage} />}
      {page === 'Notifcation' && <Account choice={choice} company={company} />}
      {page === 'Manage' && <Manage boatsData={boatsData} onUpdate={onUpdate} onDelete={onDelete} />}
      {page === 'Wallet' && <Wallet boatsData={boatsData} onUpdate={onUpdate} onDelete={onDelete} money={money} />}
    </div>
  );
};

function Dashboard({ choice, company, money }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const [currentBoatsData, setBoatsData] = useState(boatsData.owner.boats);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const addBoat = (newBoat) => {
    setBoatsData((prevState) => [...prevState, newBoat]);
  };

  const updateBoat = (updatedBoat) => {
    setBoatsData((prevState) =>
      prevState.map((boat) =>
        boat.id === updatedBoat.id ? updatedBoat : boat
      )
    );
  };

  const deleteBoat = (boatId) => {
    setBoatsData((prevState) => prevState.filter((boat) => boat.id !== boatId));
  };
  console.log("money=",money)
  return (
    <div className="dashboard">
      <TopBar />
      <Sidebar onChangePage={handleChangePage} />
      <MainPage
        page={currentPage}
        boatsData={currentBoatsData}
        onAddBoat={addBoat}
        onUpdate={updateBoat}
        onDelete={deleteBoat}
        handleChangePage={handleChangePage}
        choice={choice}
        company={company}
        money={money}
      />
    </div>
  );
}
export default Dashboard;
