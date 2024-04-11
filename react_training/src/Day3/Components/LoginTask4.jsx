import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name === "Prathamesh" && password === "123456") {
      localStorage.setItem("loginState", true);
      navigate("/home");
    }
  };
  return (
    <div>
      <input
        required
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        required
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}> Login</button>
    </div>
  );
};

export default Login;
