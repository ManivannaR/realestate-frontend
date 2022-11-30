import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newtype, setNewType] = useState("password");
  const [newicon, setNewIcon] = useState(eyeDisabled);
  const [oldtype, setOldType] = useState("password");
  const [oldicon, setOldIcon] = useState(eyeDisabled);

  const ToggleSubmit = () => {
    if (newtype === "password") {
      setNewIcon(eye);
      setNewType("text");
    } else {
      setNewIcon(eyeDisabled);
      setNewType("password");
    }
  };

  const newToggleSubmit = () => {
    if (newtype === "password") {
      setOldIcon(eye);
      setOldType("text");
    } else {
      setOldIcon(eyeDisabled);
      setOldType("password");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let Data = {
      email: email,
      password: password,
    };
    // check all the required eligiblity criteria for email and password
    if (!Data.email.split("@").length > 1) {
      alert("Email format is incorrect");
    } else if (Data.password.length < 5) {
      alert("Please give a Password of atleast 5 length Charcters");
    } else if (Data.password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "https://realestatehrrm.onrender.com/register",
        { email, password },
        config
      );
      if (data.data.status === "Failed") {
        alert("Invalid data entred or users already exist");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="main-form">
        <div className="logo">
          <img src={require("../Images/Logo.jpg")} alt="palce"></img>
        </div>
        <div className="paragraph">
          <p>Create a New Account</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="input-1">
            <input
              name="Mail-ID"
              placeholder="Mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-field">
            <input
              name="password"
              placeholder="Password"
              value={password}
              type={newtype}
              onChange={(e) => setPassword(e.target.value)}
              className="input-2"
            />
            <span onClick={ToggleSubmit}>
              <Icon icon={newicon} size={25} className="toggle-icon" />
            </span>
          </div>
          <div className="new-input-field">
            <input
              name="Confirm password"
              placeholder="Confirm Password"
              value={confirmPassword}
              type={oldtype}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-3"
            />
            <span onClick={newToggleSubmit}>
              <Icon icon={oldicon} size={25} className="new-toggle" />
            </span>
          </div>
          <div className="tonew">
            <button type="submit" className="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
