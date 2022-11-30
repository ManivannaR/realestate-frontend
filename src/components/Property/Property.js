import React from "react";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import SearchBar from "../SearchBar/SearchBar";
import PropertyTable from "../PropertyTable/PropertyTable";

const Property = () => {
  return (
    <div>
      <NavbarLeft />
      <HeaderBlock />
      <div className="table-form">
        <SearchBar />
        <PropertyTable />
      </div>
    </div>
  );
};

export default Property;
