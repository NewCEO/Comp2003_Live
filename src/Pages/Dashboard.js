import React, { useState } from 'react';
import "../CSS/Dashboard.css"
import boatsData from "../boat-owner.json"
import OwnerCard from '../Components/OwnerCard';
import logo from '../Assets/logo.png'
import user_avatar from '../Assets/user-avatar.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faHomeLgAlt, faQuestionCircle, faUpload, faWallet, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Sidebar = ({ onChangePage }) => {

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <img
            src={logo}
            className="d-inline-block align-top mt-3"
            alt="Dskafos logo"
          />
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  return (
    <div className="top-bar">
      <div className="user-welcome">Welcome {name}</div>
      <div className="user-info">
        <img
          className="user-avatar"
          src={user_avatar}
          alt="User Avatar"
        />
        <span className="user-name">{name}</span>
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
                  <button className="home-button">Resend Verficiation Mail</button>
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
    <>
      <h2 className='page_header' style={{ margin: '0 auto', marginTop: '-200px', marginBottom: '50px', color: '#2C4189' }} >Upload Product</h2>
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
    </>

  );
};



const Manage = ({ boatsData, onUpdate, onDelete }) => {
  let total = 0
  boatsData.forEach((boat) => {
    total += boat.price;
  });

  let formattedTotal = `$${total.toLocaleString()}`;
  return (
    <>
      <h2 className='manage_header'>Listings - Overview</h2>
      <div className="manage">
        {boatsData.map((boat) => (
          <OwnerCard key={boat.id} boat={boat} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
      <h3 style={{ marginTop: '100px', color: '#2c4189' }}>Total amount listed :<h2>{formattedTotal}</h2> </h3>
    </>
  );
}

const Account = ({ page, choice, company, boatsData }) => {
  console.log('account-dashboard', company, choice)
  const selectedChoice = choice.map((choice) => {
    if (choice.selected === true) {
      return (
        <p key={choice.id}>{choice.name}</p>
      )
    }
    return null;
  });
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  return (
    <div className="account">
      <div className="account-card">
        <p><b>Full name</b></p>
        <p>{name}</p>
        <p><b>Email</b></p>
        <p>{email}</p>
        <p><b>Company</b></p>
        {company[1].selected && <p>{company[1].name}</p>}
        {company[0].selected && <p>I work Independently</p>}
        <p><b>Services:</b></p>
        {selectedChoice}
        <p><b>Number of boats:</b>:</p>
        <p>{boatsData.length}</p>

      </div>
    </div>
  );
};

const Wallet = ({ boatsData, money }) => {
  let total = 0
  boatsData.forEach((boat) => {
    total += boat.price;
    return total
  });
  let fommattedMoney = `$${money.toLocaleString()}`;

  const [show, setShow] = useState(false);
  const [displayValues, setDisplayValues] = useState(false);
  const [payeeBank, setPayeeBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [sortCode, setSortCode] = useState('');
  const [accountType, setAccountType] = useState('');
  const [errors, setErrors] = useState({});


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveChanges = () => {


    const validationErrors = {};

    if (!payeeBank.trim()) {
      validationErrors.payeeBank = "Payee Bank cannot be empty";
    }

    if (!/^\d{8}$/.test(accountNumber)) {
      validationErrors.accountNumber = "Account Number must be an 8-digit value";
    }

    if (!/^(\d{2}-){3}\d{2}$/.test(sortCode)) {
      validationErrors.sortCode = "Sort Code must be in the format XX-XX-XX-XX";
    }

    // Display errors if any
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any previous errors
    setErrors({});
    setDisplayValues(true);
    setShow(false);
  };


  return (
    <div className="wallet">
      <h2 className='page_header'>Wallet - Overview</h2>
      <Row>
        <Col>
          <Row>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card style={{ minHeight: '300px' }} className='dashboard-card'>
                <Card.Body>
                  <Card.Title className='dashboard-card-title'>
                    <h3 style={{ textAlign: 'left' }}>Your Balance</h3>
                    <hr></hr>
                    <h1 style={{ textAlign: 'left', fontSize: '70px', color: '#2C4189' }}>{fommattedMoney}</h1>
                  </Card.Title>
                  <button className="topUp-btn" style={{ marginRight: '20px' }}>Top Up</button>
                  <button className="home-button" onClick={handleShow}>Add Linked Account</button>
                </Card.Body>

              </Card>
            </Col>
            <Col sm={12} style={{ marginBottom: '15px' }}>
              <Card style={{ minHeight: '280px' }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: 'left' }}><h3>Ongoing Transactions</h3></Card.Title>
                  <hr></hr>
                  {/* <Card.Title className='promotions-card-title'>Total Amounts </Card.Title> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card style={{ minHeight: '200px' }}>
                <Card.Title className='dashboard-card-title'>
                  <h3 style={{ textAlign: 'left' }}>Recent Transactions</h3>
                  <hr></hr>
                </Card.Title>
              </Card>
            </Col>


            <Col sm={12} style={{ marginBottom: '25px' }}>
              <Card style={{ minHeight: '215px' }}>
                <Card.Title className='dashboard-card-title' style={{ textAlign: 'left' }}>
                  <h3 >Linked Account</h3>
                  <hr></hr>
                </Card.Title>
                {displayValues && (
                  <Card.Body style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h4 style={{ marginRight: '10px', color: '#2C4189' }}>Payee Bank:</h4>
                      <p style={{ marginBottom: '0' }}><b>{payeeBank}</b></p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h4 style={{ marginRight: '10px', color: '#2C4189' }}>Account Number:</h4>
                      <p style={{ marginBottom: '0' }}><b>{accountNumber}</b></p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h4 style={{ marginRight: '10px', color: '#2C4189' }}>Sort-code:</h4>
                      <p style={{ marginBottom: '0' }}><b>{sortCode}</b></p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h4 style={{ marginRight: '10px', color: '#2C4189' }}>Account type:</h4>
                      <p style={{ marginBottom: '0' }}><b>{accountType}</b></p>
                    </div>
                  </Card.Body>
                )}



              </Card>
            </Col>


          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Linked Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors.payeeBank && <div className="error-message">{errors.payeeBank}</div>}
          <Form>
            <Form.Group className="mb-3" controlId="linkedAccount.ControlInput1">
              <Form.Label >Payee Bank</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your bank name in full"
                value={payeeBank}
                onChange={(e) => setPayeeBank(e.target.value)}
                autoFocus
              />
            </Form.Group>
            {errors.accountNumber && <div className="error-message">{errors.accountNumber}</div>}
            <Form.Group className="mb-3" controlId="linkedAccount.ControlInput1">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                autoFocus
              />
            </Form.Group>
            {errors.sortCode && <div className="error-message">{errors.sortCode}</div>}
            <Form.Group className="mb-3" controlId="linkedAccount.ControlInput1">
              <Form.Label>Sort Code</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Your bank account sort code"
                value={sortCode}
                onChange={(e) => setSortCode(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Account Type</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Current account"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    checked={accountType === 'Current'}
                    onChange={() => setAccountType('Current')}
                  />
                  <Form.Check
                    inline
                    label="Savings Account"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={accountType === 'Savings'}
                    onChange={() => setAccountType('Savings')}
                  />
                </div>
              ))}
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const MainPage = ({ page, boatsData, onAddBoat, onUpdate, onDelete, handleChangePage, choice, company, money }) => {
  return (
    <div className="main-page">
      {page === 'Home' && <HomePage />}
      {page === 'Upload' && <UploadPage onAddBoat={onAddBoat} handleChangePage={handleChangePage} />}
      {page === 'Notifcation' && <Account choice={choice} company={company} boatsData={boatsData} />}
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
  console.log("money=", money)
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
