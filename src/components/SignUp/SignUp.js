import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newType, setNewType] = useState("password");
  const [newIcon, setNewIcon] = useState(eyeDisabled);
  const [oldType, setOldType] = useState("password");
  const [oldIcon, setOldIcon] = useState(eyeDisabled);

  const oldToggleSubmit = () => {
    if (oldType === "password") {
      setOldIcon(eye);
      setOldType("text");
    } else {
      setOldIcon(eyeDisabled);
      setOldType("password");
    }
  };

  const newToggleSubmit = () => {
    if (newType === "password") {
      setNewIcon(eye);
      setNewType("text");
    } else {
      setNewIcon(eyeDisabled);
      setNewType("password");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };

    if (data.email === "") {
      alert("Enter your email");
    } else if (data.password === "") {
      alert("Enter your password");
    } else if (data.password !== confirmPassword) {
      alert("Password and Confirm Password does not match.");
    } else {
      const result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const resData = await result.json();
      if (resData.status === "Failed") {
        alert(resData.message);
      } else {
        alert("Registration Successful. Taking you to Login page.");
        navigate("/");
      }
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-form">
        <div className="reg-logo">
          <img src={require("../Images/Logo.jpg")} alt="palce"></img>
        </div>
        <div className="paragraph">
          <p>Create a New Account</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="input-div">
            <input
              className="reg-inputs"
              type="text"
              name="Mail-ID"
              placeholder="Mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-div">
            <input
              className="reg-inputs"
              name="password"
              placeholder="Password"
              value={password}
              type={oldType}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={oldToggleSubmit} className="toggle-icon">
              <Icon icon={oldIcon} size={25} />
            </span>
          </div>
          <div className="input-div">
            <input
              name="Confirm password"
              placeholder="Confirm Password"
              value={confirmPassword}
              type={newType}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="reg-inputs"
            />
            <span onClick={newToggleSubmit} className="toggle-icon">
              <Icon icon={newIcon} size={25} />
            </span>
          </div>
          <div className="tonew">
            <button type="submit" className="reg-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
