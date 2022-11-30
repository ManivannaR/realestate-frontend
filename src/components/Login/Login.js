import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";
import axios from "axios";

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
    e.preventDefault(); // prevent the default nature

    const Data = {
      // the data type
      email: email,
      password: password,
    };

    localStorage.setItem("userId", Data.email);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        config
      );

      if (data.data.status === "Sucess") {
        navigate("/homepage");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="Container">
        <div className="Main-form">
          <div className="logo">
            <img src={require("../Images/Logo.jpg")} alt="logo"></img>
          </div>
          <div className="Paragraph">
            <p>Enter your crentitals to access your account</p>
          </div>
          <form action="" method="POST" className="form">
            <div>
              <input
                name="User-ID"
                placeholder="User ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="Input-1"
              ></input>
            </div>
            <div className="Input-field">
              <input
                name="password"
                placeholder="password"
                value={password}
                type={type}
                onChange={(e) => setPassword(e.target.value)}
                className="Input-2"
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={25} className="Toggle-icon" />
              </span>
            </div>
            <div className="Tonew">
              <button type="submit" className="Button" onClick={submitHandler}>
                Sign In
              </button>
            </div>
          </form>
          <div>
            <p>
              <b>Don't have account ?</b>
            </p>
          </div>
          <Link to="/signup">
            <p className="Tonew">Create Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
