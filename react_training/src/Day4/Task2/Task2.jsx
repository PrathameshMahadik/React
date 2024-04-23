/* 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
Ensure that each input is a controlled component. 
When the user submits the form, log the form data to the console. */
import React, { useState } from "react";
import {
  Checkbox,
  Gender,
  Radio,
  Male,
  Female,
  Agree,
  Submit,
  cap_Submit,
  Text,
  Name,
  Email,
  AGE,
  Age,
  Number,
  cap_Email,
  cap_Name,
  AGREE_TERMS,
  EMPTY_STRING,
} from "../constants";
import "../CSS/Task4.css";

const Task2 = () => {
  const [formData, setFormData] = useState({
    name: { EMPTY_STRING },
    email: { EMPTY_STRING },
    age: { EMPTY_STRING },
    gender: { EMPTY_STRING },
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === `${Checkbox}` ? checked : value,
    }));
  };

  const formFields = [
    {
      label: `${cap_Name} : `,
      type: Text,
      name: Name,
      value: formData.name,
      onChange: handleChange,
    },
    {
      label: `${cap_Email} : `,
      type: Email,
      name: Email,
      value: formData.email,
      onChange: handleChange,
    },
    {
      label: `${AGE} : `,
      type: Number,
      name: Age,
      value: formData.age,
      onChange: handleChange,
    },
    {
      label: `${Gender} : `,
      type: Radio,
      name: Gender,
      options: [Male, Female],
      checked: formData.gender,
      onChange: handleChange,
    },
    {
      label: `${AGREE_TERMS} : `,
      type: Checkbox,
      name: Agree,
      checked: formData.agree,
      onChange: handleChange,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mainDiv">
      <h1>Task-2</h1>
      <div className="mainDiv">
          {formFields.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              {field.type !== Checkbox && field.options ? (
                field.options.map((option, optionIndex) => (
                  <section key={optionIndex}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={option}
                      checked={field.checked === option}
                      onChange={field.onChange}
                    />
                    <label>{option}</label>
                  </section>
                ))
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  checked={field.checked}
                  onChange={field.onChange}
                />
              )}
            </div>
          ))}
      </div>
      <button type={Submit}>{cap_Submit}</button>
    </form>
  );
};

export default Task2;
