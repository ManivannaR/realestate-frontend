import React from "react";
import "./BasicInfo.css";

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="basic-info">
      <div className="form-box">
        <label for="property-type">Property Type</label>
        <select
          className="select-input"
          name="propertyType"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Property Type
          </option>
          <option value="Plot">Plot</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

      <div className="form-box">
        <label for="negotiable">Negotiable</label>
        <select
          className="select-input"
          name="negotiable"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Negotiable
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="price">Price</label>
        <input
          className="select-input"
          type="number"
          placeholder="Example: 100000"
          value={formData.price}
          name="price"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="ownership">Ownership</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Ownership"
          value={formData.ownership}
          name="ownership"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="daysLeft">Days Left</label>
        <input
          className="select-input"
          type="number"
          placeholder="Enter Days Left"
          value={formData.daysLeft}
          name="daysLeft"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="propertyApproved">Property Approved</label>
        <select
          className="select-input"
          name="propertyApproved"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Property Approved
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="propertyDescription">Property Description</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Property Description"
          value={formData.propertyDescription}
          name="propertyDescription"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="bankLoan">Bank Loan</label>
        <select
          className="select-input"
          name="bankLoan"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Bank Loan
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};

export default BasicInfo;
