import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Snackbar, Alert, Box } from "@mui/material";
import validationSchema from "../Components/Task13/ValidationSchema";

const Task13 = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };
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
        <Snackbar
          open={submitted}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Form submitted successfully!
          </Alert>
        </Snackbar>
        <Formik
          initialValues={{
            email: "",
            password: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            setSubmitted(true);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Sign in to continue</h1>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ""}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Task13;
