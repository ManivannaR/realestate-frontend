import React from "react";

const PropertyDetail = ({ formData, setFormData }) => {
  return (
    <div className="property-detail">
      <div className="form-box">
        <label for="length">Length</label>
        <input
          className="select-input"
          type="number"
          placeholder="Example: 1000"
          value={formData.length}
          name="length"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="breadth">Breadth</label>
        <input
          className="select-input"
          type="number"
          placeholder="Example: 1000"
          value={formData.breadth}
          name="breadth"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="totalArea">Total Area</label>
        <input
          className="select-input"
          type="number"
          placeholder="Example: 1000"
          value={formData.totalArea}
          name="totalArea"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <div className="form-box">
        <label for="areaUnit">Area Unit</label>
        <select
          className="select-input"
          name="areaUnit"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Area Unit
          </option>
          <option value="square metres">Square Metres</option>
          <option value="square kilometres">Square Kilometres</option>
        </select>
      </div>

      <div className="form-box">
        <label for="numberOfBhk">Number of BHK</label>
        <select
          className="select-input"
          name="numberOfBhk"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Number of BHK
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="form-box">
        <label for="numberOfFloor">Number of Floor</label>
        <select
          className="select-input"
          name="numberOfFloor"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Number of Floor
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="form-box">
        <label for="attached">Attached</label>
        <select
          className="select-input"
          name="attached"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Attached
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="westernToilet">Western Toilet</label>
        <select
          className="select-input"
          name="westernToilet"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Attached
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Mixed">Mixed</option>
        </select>
      </div>

      <div className="form-box">
        <label for="furnished">Furnished</label>
        <select
          className="select-input"
          name="furnished"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Furnished
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="carParking">Car Parking</label>
        <select
          className="select-input"
          name="carParking"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Car Parking
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="lift">Lift</label>
        <select
          className="select-input"
          name="lift"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Lift
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-box">
        <label for="electricity">Electricity</label>
        <select
          className="select-input"
          name="electricity"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        >
          <option value="none" selected hidden disabled>
            Select Electricity
          </option>
          <option value="3-Phase">3-Phase</option>
          <option value="4-Phase">4-Phase</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyDetail;
