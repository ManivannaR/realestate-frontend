import React, { useState } from "react";
import BasicInfo from "../MiniForms/BasicInfo";
import PropertyDetail from "../MiniForms/PropertyDetail";
import GeneralInfo from "../MiniForms/GeneralInfo";
import LocationInfo from "../MiniForms/LocationInfo";
import { useNavigate } from "react-router-dom";
import "./MainContainer.css";
import ProgressBar1 from "../ProgressBar/ProgressBar1";
import ProgressBar2 from "../ProgressBar/ProgressBar2";
import ProgressBar3 from "../ProgressBar/ProgressBar3";
import ProgressBar4 from "../ProgressBar/ProgressBar4";

const MainContainer = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyType: "",
    negotiable: "",
    price: "",
    ownership: "",
    daysLeft: "",
    propertyApproved: "",
    propertyDescription: "",
    bankLoan: "",
    length: "",
    breadth: "",
    totalArea: "",
    areaUnit: "",
    numberOfBhk: "",
    numberOfFloor: "",
    attached: "",
    westernToilet: "",
    furnished: "",
    carParking: "",
    lift: "",
    electricity: "",
    name: "",
    mobile: "",
    postedBy: "",
    saleType: "",
    featuredPackage: "",
    ppdPackage: "",
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PropertyDetail formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <GeneralInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <LocationInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const ProgressDisplay = () => {
    if (page === 0) {
      return <ProgressBar1 />;
    } else if (page === 1) {
      return <ProgressBar2 />;
    } else if (page === 2) {
      return <ProgressBar3 />;
    } else {
      return <ProgressBar4 />;
    }
  };

  return (
    <div className="form">
      <h1 className="add-property-heading">Add New Property</h1>
      <div className="header">{ProgressDisplay()}</div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        <button
          className="footer-buttons"
          id="footer-button-1"
          onClick={() => {
            if (page === 0) {
              navigate("/homepage");
            } else {
              setPage((currPage) => currPage - 1);
            }
          }}
        >
          {page === 0 ? "Cancel" : "Previous"}
        </button>
        <button
          className="footer-buttons"
          id="footer-button-2"
          onClick={async () => {
            if (page === 3) {
              const res = await fetch("http://localhost:5000/property", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "content-type": "application/json",
                },
              });
              console.log(res);
              if (res.ok) {
                navigate("/homepage");
              }
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === 3 ? "Add Property" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
