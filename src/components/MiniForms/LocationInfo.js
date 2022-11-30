import React from "react";

const LocationInfo = ({ formData, setFormData }) => {
  return (
    <div className="location-info">
      <div className="form-box">
        <label for="email">Email</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Email"
          value={formData.email}
          name="email"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="city">City</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter City"
          value={formData.city}
          name="city"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="area">Area</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Area"
          value={formData.area}
          name="area"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="pincode">Pincode</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Pincode"
          value={formData.pincode}
          name="pincode"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="address">Address</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Address"
          value={formData.address}
          name="address"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="landmark">Landmark</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Landmark"
          value={formData.landmark}
          name="landmark"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="latitude">Latitude</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Latitude"
          value={formData.latitude}
          name="latitude"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="longitude">Longitude</label>
        <input
          className="select-input"
          type="text"
          placeholder="Enter Longitude"
          value={formData.longitude}
          name="longitude"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default LocationInfo;
