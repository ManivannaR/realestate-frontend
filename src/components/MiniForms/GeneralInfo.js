import React from "react";

const GeneralInfo = ({ formData, setFormData }) => {
  return (
    <div className="general-info">
      <div className="form-box">
        <label for="name">Name</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          name="name"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="mobile">Mobile</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Mobile"
          value={formData.mobile}
          name="mobile"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="postedBy">Posted by</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Posted by"
          value={formData.postedBy}
          name="postedBy"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="saleType">Sale Type</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Sale Type"
          value={formData.saleType}
          name="saleType"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="featuredPackage">Featured Package</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Featured Package"
          value={formData.featuredPackage}
          name="featuredPackage"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="ppdPackage">PPD Package</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter PPD Package"
          value={formData.ppdPackage}
          name="ppdPackage"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
