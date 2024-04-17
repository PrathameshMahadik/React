/* 13.install  Yup. Define a Yup validation schema for a more complex form. 
Include validation rules for fields like email, password, and phone number. 
Ensure that error messages are displayed for each validation rule. */
/* Implement real-time validation feedback using Material-UI's TextField component. 
Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well) */
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import{ TextField }from "../Components/material";
import * as constants from '../constants'
import '../CSS/Task10.css'

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

const Task13 = () => {
  return (
    <div className="signInBox">
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
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
                  id={constants.Email}
                  name={constants.Email}
                  label={constants.cap_Email}
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </div>
              <br />
              <div className="form-row">
                <TextField
                  name={constants.Password}
                  id={constants.Password}
                  label={constants.cap_password}
                  type={constants.Password}
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
    </div>
  );
};

export default Task13;
