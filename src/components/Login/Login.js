import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeDisabled);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeDisabled);
      setType("password");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = { email, password };
    localStorage.setItem("userId", data.email);

    const res = await fetch("https://realestatehrrm.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await res.json();
    if (resData.status === "Success") {
      navigate("/homepage");
    } else {
      alert(resData.message);
    }
  };

  return (
    <div>
      <div className="log-container">
        <div className="log-form">
          <div className="log-logo">
            <img src={require("../Images/Logo.jpg")} alt="logo"></img>
          </div>
          <div className="log-paragraph">
            <p>Enter your credentials to access your account</p>
          </div>
          <form method="POST" className="form" onSubmit={submitHandler}>
            <div className="log-field">
              <input
                type="text"
                name="User-ID"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="log-input"
              ></input>
            </div>
            <div className="log-field">
              <input
                name="password"
                placeholder="Password"
                value={password}
                type={type}
                onChange={(e) => setPassword(e.target.value)}
                className="log-input"
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={25} className="toggle-icon" />
              </span>
            </div>
            <div className="Tonew">
              <button type="submit" className="reg-button">
                Sign In
              </button>
            </div>
          </form>
          <div className="no-account">
            <p>
              <b>Don't have account ?</b>
            </p>
          </div>
          <Link to="/signup">
            <p className="reg-link">Create Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
