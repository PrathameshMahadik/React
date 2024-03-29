/*2.Create a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields.*/
import React, { useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <h2>Entered Information:</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
