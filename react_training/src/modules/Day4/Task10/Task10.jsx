import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import "../../../css/Task10.css";

const Task10 = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target)
    if (e.target.validity.valid) {
      setNameError(false);
      setName(e.target.value);
      console.log(e.target.value);
    } else {
      setNameError(true);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };

  const textFields = [
    {
      label: "Name",
      value: name,
      onChange: handleNameChange,
      error: nameError,
      helperText: nameError
        ? "Please enter your name (letters and spaces only)"
        : "",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]+",
      },
    },
    {
      label: "Email",
      value: email,
      onChange: handleEmailChange,
      error: emailError,
      helperText: emailError ? "Please enter a valid email" : "",
      inputProps: {
        required: true,
        type: "email",
      },
    },
  ];

  return (
    <div className="signInBox">
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        height={300}
        width={300}
        my={4}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap={6}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <div>
          <h1>Task 10</h1>
          {textFields.map((textField, index) => (
            <div key={index}>
              <TextField
                label={textField.label}
                value={textField.value}
                onChange={textField.onChange}
                error={textField.error}
                helperText={textField.helperText}
                inputProps={textField.inputProps}
              />
              <br />
              <br />
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default Task10;
