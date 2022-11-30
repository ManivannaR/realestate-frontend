import React from "react";
import "./HeaderBlock.css";

const HeaderBlock = () => {
  const id = "0PPD0125";
  const username = localStorage.getItem("userId");

  return (
    <div className="header-block">
      <h3 className="user-id-block">
        USER ID: <span>{id}</span>
      </h3>
      <div className="username-container">
        <img
          src="/username-icon/username-icon.png"
          alt="username-icon"
          className="username-icon"
        />
        <h3 className="username">{username}</h3>
        <img
          src="/username-icon/username-more-icon.png"
          alt="username-more-icon"
          className="username-more-icon"
        />
      </div>
      <div className="break-line"></div>
    </div>
  );
};

export default HeaderBlock;
