import React, { useState, useEffect } from "react";
import "./PropertyTable.css";

const PropertyTable = () => {
  const [propertyDisplayDatas, setPropertyDisplayDatas] = useState([]);
  const [sold, setSold] = useState("Unsold");

  const fetchPropertyDisplayDatas = async () => {
    const res = await fetch("http://localhost:5000/property");
    const { data } = await res.json();
    setPropertyDisplayDatas(data);
  };

  useEffect(() => {
    fetchPropertyDisplayDatas();
  }, []);

  const handleButtonClick = () => {
    setSold("Sold");
  };

  return (
    <div className="property-table-container">
      <table>
        <thead>
          <tr>
            <th>PPD ID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>Days Left</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {propertyDisplayDatas.map((obj) => {
            return (
              <tr key={obj._id}>
                <td>PPD{Math.floor(Math.random() * 10000)}</td>
                <td>
                  <img
                    src="/image-icon/image-icon.png"
                    alt="mini-scenery-icon"
                  />
                </td>
                <td>{obj.property}</td>
                <td>{obj.contact}</td>
                <td>{obj.area}</td>
                <td>{Math.floor(Math.random() * 10)}</td>
                <td>
                  <button className="btn-sold" onClick={handleButtonClick}>
                    {sold}
                  </button>
                </td>
                <td>{obj.daysLeft}</td>
                <td>
                  <img
                    className="action-icon"
                    src="/action-icons/action-eye-icon.png"
                    alt="action-eye-icon"
                  />
                  <img
                    className="action-icon"
                    src="/action-icons/action-pencil-icon.png"
                    alt="action-pencil-icon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
