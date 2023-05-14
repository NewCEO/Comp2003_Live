import React, { useState } from "react";
import "../CSS/Filtercards.css";
import FilterBar from "../Components/Filterbar";
import CardList from "../Components/Cardlist";
// import NavBar from "./LandingNav"

function Filtercards() {
  const [filter, setFilter] = useState({
    type: "",
    model: "",
    price: "",
    location: []
  });

  const handleFilter = (value, category, location) => {
    if (category === "location") {
      const index = filter.location.indexOf(location);
      if (index === -1) {
        setFilter((prev) => ({ ...prev, location: [...prev.location, location] }));
      } else {
        const newLocations = [...filter.location];
        newLocations.splice(index, 1);
        setFilter((prev) => ({ ...prev, location: newLocations }));
      }
    } else if (category === "reset") {
      setFilter({ type: "", model: "", price: "", location: [] });
    } else if (category === "apply") {
      // handle the filter
    } else {
      setFilter((prev) => ({ ...prev, [category]: value }));
    }
  };

  return (
    <div className="page">
      <div className="header">
        <h1>The range </h1>
      </div>
      <div className="filter-bar">
        <FilterBar handleFilter={handleFilter} />
      </div>
      <div className="card-list">
        <CardList filter={filter} />
      </div>
    </div>
  );
}

export default Filtercards;
