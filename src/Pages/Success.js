import React from 'react'
import "../CSS/BoatId.css"
import logo from '../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function Success() {
    let navigate = useNavigate();
    return (
        <>
        <div class="row" className='boatNavBar'>
        <Navbar.Brand>
            <button
                type="button"
                class="btn btn-link"
                onClick={() => navigate("/filtercard")}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000", }} />

            </button>
            <img
                src={logo}
                width="5%"
                height="5%"
                onClick={() => navigate("/")}
                alt="Dskafos logo"
            />
        </Navbar.Brand>
        </div>
        <div className="success">
            <div className="success-card">
                <h1>Successful payment!</h1>
                <p>Click the top left corner to go back!</p>                
            </div>
        </div>
        </>
    )
}