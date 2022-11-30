import React from "react";
import "./NavbarLeft.css";

const NavbarLeft = () => {
  return (
    <div className="navbar-left">
      <h1 className="logo">Logo</h1>
      <nav className="navbar-container">
        <img
          src="./navbar-icons/home.png"
          alt="home-icon"
          className="navbar-icons"
          id="navbar-home-icon"
        />
        <li className="navbar-links" id="property-link">
          Property
        </li>
        <img
          src="./navbar-icons/bell.png"
          alt="bell-icon"
          className="navbar-icons"
          id="navbar-bell-icon"
        />
        <li className="navbar-links" id="assistance-link">
          Assistance
        </li>
        <img
          src="./navbar-icons/download.png"
          alt="download-icon"
          className="navbar-icons"
          id="navbar-download-icon"
        />
        <li className="navbar-links" id="received-interest-link">
          Received Interest
        </li>
        <img
          src="./navbar-icons/upload.png"
          alt="upload-icon"
          className="navbar-icons"
          id="navbar-upload-icon"
        />
        <li className="navbar-links" id="sent-interest-link">
          Sent Interest
        </li>
        <img
          src="./navbar-icons/eye.png"
          alt="eye-icon"
          className="navbar-icons"
          id="navbar-eye-icon"
        />
        <li className="navbar-links" id="property-views-link">
          Property Views
        </li>
        <img
          src="./navbar-icons/tag.png"
          alt="tag-icon"
          className="navbar-icons"
          id="navbar-tag-icon"
        />
        <li className="navbar-links" id="tariff-plan-link">
          Tariff Plan
        </li>
      </nav>
    </div>
  );
};

export default NavbarLeft;
