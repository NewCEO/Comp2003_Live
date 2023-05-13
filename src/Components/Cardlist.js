import React from "react";
import rawdata from '../mock-data.json';
import '../CSS/Cardlist.css'

function CardList() {
  return (
    <div className="card-list">
      {rawdata.map((boat) => (
        <div key={boat.id} className="card">
          <img src={boat.image} alt={boat.name} />
          <div className="card-body">
            <h5 className="card-title">{boat.name}</h5>
            <p className="card-text">{boat.description}</p>
            <a href="#" className="btn btn-primary">view details</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;