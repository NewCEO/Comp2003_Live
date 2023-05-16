import React from "react";
import rawdata from '../mock-data.json';
import '../CSS/Cardlist.css'

function CardList() {
  return (
    <div className="card-list">
      {rawdata.map((boat) => (
        <div key={boat.id} className="cardListCard">
          <img src={boat.image} alt={boat.name} className="cardListImg"/>
          <div className="card-body">
            <h5 className="card-title">{boat.name}</h5>
            <p className="card-text">{boat.description}</p>
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
      ))}
    </div>

  );
}

export default CardList;