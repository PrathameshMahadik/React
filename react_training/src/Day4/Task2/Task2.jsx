/* 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
Ensure that each input is a controlled component. 
When the user submits the form, log the form data to the console. */
import React, { useState } from "react";
import { Checkbox, Name, Text, Email, Number, Age, Gender, Radio, Male, Female, Agree, Submit, cap_Submit } from "../constants";
import '../CSS/Task4.css'
const Task2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === `${Checkbox}` ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mainDiv">
      <h1>Task-2</h1>
      <div>
        <label>Name :</label>
        <input
          type={Text}
          name={Name}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type={Email}
          name={Email}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type={Number}
          name={Age}
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type={Radio}
          name={Gender}
          value={Male}
          checked={formData.gender === `${Male}`}
          onChange={handleChange}
        />
        <label>Male</label>
        <input
          type={Radio}
          name={Gender}
          value={Female}
          checked={formData.gender === `${Female}`}
          onChange={handleChange}
        />
        <label>Female</label>
      </div>
      <div>
        <label>Agree to terms:</label>
        <input
          type={Checkbox}
          name={Agree}
          checked={formData.agree}
          onChange={handleChange}
        />
      </div>
      <button type={Submit}>{cap_Submit}</button>
    </form>
  );
};

export default Task2;
