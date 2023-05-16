import React from "react";
import "../CSS/Filterbar.css";
import rawdata from "../mock-data.json";

function FilterBar(props) {
  const handleFilter = props.handleFilter;

  const types = Array.from(new Set(rawdata.map((boat) => boat.type)));
  const models = Array.from(new Set(rawdata.map((boat) => boat.name)));
  const prices = Array.from(new Set(rawdata.map((boat) => boat.price)));

  const locations = [
    "The Americas",
    "Australia/Asia",
    "Mediterranean/Europe",
    "UK & Ireland",
  ];


  const handleTypeChange = (e) => {
    handleFilter(e.target.value, "type");
  };

  const handleModelChange = (e) => {
    handleFilter(e.target.value, "model");
  };

  const handlePriceChange = (e) => {
    handleFilter(e.target.value, "price");
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    const isChecked = e.target.checked;
    handleFilter(location, "location", isChecked);
  };

  const handleReset = () => {
    handleFilter("", "reset");
  };

  const handleApply = () => {
    handleFilter("", "apply");
  };

  return (
    <div className="filter-container">
      <div className="filter-header">Filters</div>
      <div className="filter-types">
        <label className="mb-3">Type:</label>
        <select onChange={handleTypeChange}>
          <option value="">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-models">
        <label className="mb-3">Model:</label>
        <select onChange={handleModelChange}>
          <option value="">All</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-prices">
        <label className="mb-3">Price:</label>
        <select onChange={handlePriceChange}>
          <option value="">All</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Location:</label>
        {locations.map((location) => (
          <div key={location}>
            <label>
              <input
                type="checkbox"
                value={location}
                onChange={handleLocationChange}
              />
              {location}
            </label>
          </div>
        ))}
      </div>
      <div className="filter-actions">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

export default FilterBar;
