import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { input } from './input'
import '../CSS files/task4.css'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleLogin = () => {
    if (formData.name === "Prathamesh" && formData.password === "123456") {
      localStorage.setItem("login", "true");
    }
    localStorage.getItem("login") === "true"
      ? navigate("/about")
      : navigate("/login");
  };
  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <div className="outer">
    <div className="mainDiv">
      {input.map((item,index) => {
        const { type, placeholder, fieldName } = item;
        return (
          <section key = {`name_${index}`}>
            <input
            required
            type={type}
            value={formData.value}
            placeholder={placeholder}
            onChange={(e) => handleChange(fieldName, e.target.value)}
          />
          </section>
        );
      })}
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
