import React from "react";
import rawdata from '../mock-data.json';
import { useNavigate } from 'react-router-dom'
import '../CSS/Cardlist.css'

function CardList() {

  const navigate = useNavigate()

  function boatClick(e,id){
    console.log('click')
  navigate(`/boat/${id}`,)
  }
  return (
    <div className="card-list">
      {rawdata.map((boat) => (
        <div key={boat.id} className="cardListCard">
          <img src={boat.image} alt={boat.name} />
          <div className="card-body">
            <h5 className="card-title" onClick={e =>boatClick(boat.id)}>{boat.name}</h5>
            <p className="card-text">{boat.description}</p>
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
      ))}
    </div>

  );
}

export default CardList;