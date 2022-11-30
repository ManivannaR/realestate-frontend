import React from "react";
import "./ProgressBar1.css";

const ProgressBar1 = () => {
  return (
    <div className="progress-bar-container">
      <div className="box" id="step-1">
        <span className="num" id="num-1">
          1
        </span>
        <div className="text" id="text-1">
          Basic Info
        </div>
      </div>
      <div className="box" id="step-2">
        <span className="num" id="num-2">
          2
        </span>
        <div className="text" id="text-2">
          Property Detail
        </div>
      </div>
      <div className="box" id="step-3">
        <span className="num" id="num-3">
          3
        </span>
        <div className="text" id="text-3">
          General Info
        </div>
      </div>
      <div className="box" id="step-4">
        <span className="num" id="num-4">
          4
        </span>
        <div className="text" id="text-4">
          Location Info
        </div>
      </div>
    </div>
  );
};

export default ProgressBar1;
