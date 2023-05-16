import React from "react";
import "../CSS/Filterbar.css";
import rawdata from "../mock-data.json";

function FilterBar(props) {
  const handleFilter = props.handleFilter;

  const types = Array.from(new Set(rawdata.map((boat) => boat.type)));
  const models = Array.from(new Set(rawdata.map((boat) => boat.name)));
  const locations = Array.from(new Set(rawdata.map((boat) => boat.location)));

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

  // const handleReset = () => {
  //   handleFilter("", "reset");
  // };

  // const handleApply = () => {
  //   handleFilter("", "apply");
  // };

  return (
    <div className="filter-container">
      <div className="filter-header">Filters</div>
      <div className="filter-types">
        <label className="mb-2">Type:</label>
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
        <label className="mb-2">Model:</label>
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
        <label className="mb-2">Price:</label>
        <select onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="0-9999">Less than $10,000</option>
          <option value="10000-49999">$10,000 - $49,999</option>
          <option value="50000-99999">$50,000 - $99,999</option>
          <option value="100000-1000000">More than $100,000</option>
        </select>
      </div>
      <div className="filter-section">
        <label className="mb-2">Location:</label>
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
      {/* <div className="filter-actions">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleApply}>Apply</button>
      </div> */}
    </div>
  );
}

export default FilterBar;