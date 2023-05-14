import React from 'react';
import back from '../Assets/back-arrow-icon.png'
import '../CSS/BoatNavbar.css';

function BackButton() {
  return (
    <button className='back-button'>
      <img src={back} alt="Back" />
    </button>
  );
}

export default BackButton;