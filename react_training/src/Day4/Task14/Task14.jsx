import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Snackbar, Alert, Box } from "@mui/material";
import validationSchema from "../Components/Task13/ValidationSchema";

const input = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];
const Task14 = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
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
          initialValues={{
            email: "",
            password: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Form values: ", values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <h1>Sign in to continue</h1>
              {input.map((field, index) => (
                <Field
                  key={index}
                  as={TextField}
                  type={field.type}
                  name={field.name}
                  label={field.label}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={errors[field.name] && touched[field.name]}
                  helperText={
                    errors[field.name] && touched[field.name]
                      ? errors[field.name]
                      : ""
                  }
                />
              ))}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={() => setIsSnackbarOpen(true)}
              >
                Submit
              </Button>

              <Snackbar
                open={isSnackbarOpen && Object.keys(errors).length > 0}
                autoHideDuration={6000}
                onClose={() => setIsSnackbarOpen(false)}
              >
                <Alert severity="error">
                  Please fix the following errors:
                  <ul>
                    {Object.keys(errors).map((field, index) => (
                      <li key={index}>{errors[field]}</li>
                    ))}
                  </ul>
                </Alert>
              </Snackbar>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};
export default Task14;
