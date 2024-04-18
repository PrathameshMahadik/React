/* 14.Create a new form and Implement form submission handling. 
Ensure that the form cannot be submitted if there are validation errors. 
Display a summary of errors if the user attempts to submit an invalid form. */
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Box, TextField } from "../Components/material";
import "../CSS/Task10.css";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
});

const initialValues = {
  email: "",
  password: "",
};

const Task14 = () => {
  const [data, setData] = useState({});
  return (
    <div className="signInBox">
      <Box
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
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            setData(values);
            console.log(values);
          }}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty, handleChange } = formik;
            return (
              <div className="container">
                <h1>Sign in to continue</h1>
                <Form>
                  <div className="form-row">
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onChange={handleChange}
                      error={errors.email && touched.email}
                      helperText={
                        errors.email && touched.email ? errors.email : ""
                      }
                    />
                  </div>
                  <br />
                  <div className="form-row">
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      onChange={handleChange}
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Button variant="contained" disabled={!(dirty && isValid)}>
                      Sign In
                    </Button>
                  </div>
                </Form>
                <div>
                  <span>{data.email}</span>
                </div>
              </div>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};

export default Task14;
