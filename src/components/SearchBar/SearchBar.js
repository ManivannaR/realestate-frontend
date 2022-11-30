import React from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add");
  };

  return (
    <div className="search-bar-div">
      <div className="search-bar-container">
        <input placeholder="Search PPD ID" className="search-input" />
        <div className="search-bar-break-line"></div>
        <img
          src="/searchbar-icons/search-icon.png"
          alt="search-icon"
          className="search-icon"
        />
      </div>
      <div className="add-property-button-container" onClick={handleClick}>
        <button className="add-property-button">
          <img
            src="/add-property-icons/add-icon.png"
            className="add-icon"
            alt="add-icon"
          />
          Add Property
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
