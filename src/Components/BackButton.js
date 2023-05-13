import React from 'react';
import back from '../Assets/back-arrow-icon.png'
import '../CSS/BoatNavbar.css';

function BackButton() {
  return (
    <button classname='back-button'> 
        <img src={back}/>
    </button>
  );
}

export default BackButton;