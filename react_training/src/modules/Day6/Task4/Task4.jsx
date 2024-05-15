/* You are given a simple form component (LoginForm) that contains 
input fields for username and password, as well as a submit button. 
Create test cases to verify that the form fields can be filled, and the submit button works correctly. */
import React, { useState } from "react";
import { input } from "../../../MockData/input";
import '../../../css/task4.css'

const Task4 = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleSubmit = () => {
    const i = 9;
    console.log("Form Submitted", formData.name, formData.password);
    if (i === 9) {
      console.error("Crashed");
    }
  };

  return (
    <>
      <div className="mainDiv">
        {input.map((item, index) => {
          const { label, type, placeholder, fieldName } = item;
          return (
            <section key={`name_${index}`}>
              <label>{label} : </label>
              <input
                required
                type={type}
                value={formData.value}
                placeholder={placeholder}
                onChange={(e) => handleChange(fieldName, e.target.value)}
              />
              <br />
            </section>
          );
        })}
      </div>
      <div className="submitButton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Task4;
