import React, { useState } from 'react';
import { MdHome, MdFileUpload, MdLogoDev, MdDirectionsBoatFilled, MdEditDocument } from 'react-icons/md';
import { AiFillAccountBook } from "react-icons/ai";
import "../CSS/Dashboard.css"
import Button from 'react-bootstrap/Button'
import boatsData from "../boat-owner.json"
import OwnerCard from '../Components/OwnerCard';
import user_avatar from '../Assets/user-avatar.jpg'
import { Container, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpeakerDeck, faTeamspeak, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCodeCommit, faHomeLgAlt, faMoneyBillWaveAlt, faQuestionCircle, faUpload, faWallet } from '@fortawesome/free-solid-svg-icons';



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
            <FontAwesomeIcon icon={faWallet} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Notifcation')}>
            <FontAwesomeIcon icon={faCodeCommit} className='icon' />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Notifcation')}>
            <FontAwesomeIcon icon={faBell} className='icon' />
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
              <Card style={{ height: '300px' }} className='dashboard-card'>
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
              <Card style={{ height: '300px' }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: 'left' }}>Product Wishlist</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faMoneyBillWaveAlt} /></span>
                  <Card.Title className='promotions-card-title'>This is the promotions tab, you can promote products you’ve uploaded for sale or rent.</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faUpload} /></span>
                  <Card.Title className='promotions-card-title'>This is the upload tab, this is where you put up products before you promote them.</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faWallet} /></span>
                  <Card.Title className='promotions-card-title'>This is the wallet tab, where you can track all moneys going in and out of your Dskafos account</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card>
                <Card.Body className='promotions-card-body'>
                  <span className="card-icon"><FontAwesomeIcon icon={faCodeCommit} /></span>
                  <Card.Title className='promotions-card-title'>This is the request tab where you can make request from our quality service providers</Card.Title>
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

const UploadPage = ({onAddBoat,handleChangePage } ) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { boatName, address, price, description } = e.target.elements;

    const newBoat = {
      id: Math.floor(Math.random() * 10000), 
      name: boatName.value,
      location: address.value,
      price: `$${price.value}`,
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
          <OwnerCard key={boat.id} boat={boat} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </>
  );
}



const Account = ({ page,choice,company}) => {
  console.log('account-dashboard',company,choice)
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

const MainPage = ({ page, boatsData, onAddBoat, onUpdate, onDelete,handleChangePage,choice,company  }) => {
  return (
    <div className="main-page">
      {page === 'Home' && <HomePage />}
      {page === 'Upload' && <UploadPage onAddBoat={onAddBoat} handleChangePage={handleChangePage}/>}
      {page === 'Notifcation' && <Account choice={choice} company={company}/>}
      {page === 'Manage' && <Manage boatsData={boatsData} onUpdate={onUpdate} onDelete={onDelete} />}
    </div>
  );
};

function Dashboard({choice,company}) {
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
      />
    </div>
  );
}
export default Dashboard;
