import React from "react";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import MainContainer from "../PropertyForm/MainContainer";

const AddProperty = () => {
  return (
    <div>
      <NavbarLeft />
      <HeaderBlock />
      <div className="table-form">
        <MainContainer />
      </div>
    </div>
  );
};

export default AddProperty;
