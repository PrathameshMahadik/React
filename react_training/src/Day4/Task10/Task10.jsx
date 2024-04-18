import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import "../CSS/Task10.css";

const Task10 = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
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
      <TextField
        required
        label="Name"
        value={name}
        onChange={handleNameChange}
        error={nameError}
        inputProps={{
          pattern: "[A-Za-z ]+",
        }}
        helperText={
          nameError ? "Please enter your name (letters and spaces only)" : ""
        }
      />

      <br />
      <br />

      <TextField
        required
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailError ? "Please enter a valid email" : ""}
        inputProps={{
          type: "email",
        }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={nameError || emailError}
      >
        Submit
      </Button>
      </div>
    </Box>
    </div>
  );
};
export default Task10;
