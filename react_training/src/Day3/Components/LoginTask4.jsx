import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {input } from './input'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleLogin = () => {
    if (formData.name === "Prathamesh" && formData.password === "123456") {
      localStorage.setItem("loginState", true);
      navigate("/home");
    }
  };
  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <div>
      {input.map((item) => {
        const { type, placeholder, fieldName } = item;
        return (
          <input
            required
            type={type}
            value={formData.value}
            placeholder={placeholder}
            onChange={(e) => handleChange(fieldName, e.target.value)}
          />
        );
      })}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
