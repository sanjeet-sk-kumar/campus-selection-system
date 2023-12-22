import "./CompanyRegistrationForm.scss";

import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CompanyRegistrationForm = ({ setNotifications }) => {
  const [message, setMessage] = useState(undefined);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/save-company-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Handle successful registration
        setNotifications({
          info: "Company registration successful",
          severity: "success",
        });
        setTimeout(() => {
          setNotifications(null);
        }, 5000);
        resetForm();
      } else {
        // Handle registration error
        setNotifications({
          info: "Company registration failed",
          severity: "error",
        });
        setTimeout(() => {
          setNotifications(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Error occurred while registering:", error.message);
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Register as Company
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Formik
          initialValues={{
            companyName: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            contactPersonName: "",
            mobile: "",
            contactNo: "",
            email: "",
            companyWebsite: "",
            username: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form
              className="form-container company-registration-form"
              onSubmit={handleSubmit}
            >
              <Field name="companyName" as={TextField} label="Company Name" />
              <Field name="address" as={TextField} label="Address" />
              <Field name="city" as={TextField} label="City" />
              <Field name="state" as={TextField} label="State" />
              <Field name="pincode" as={TextField} label="Pincode" />
              <Field
                name="contactPersonName"
                as={TextField}
                label="Contact Person Name"
              />
              <Field name="mobile" as={TextField} label="Mobile" />
              <Field name="contactNo" as={TextField} label="Contact No" />
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email ID"
              />
              <Field
                name="companyWebsite"
                as={TextField}
                label="Company's Website"
              />
              <Field name="username" as={TextField} label="Username" />
              <Field
                name="password"
                type="password"
                as={TextField}
                label="Password"
              />
              <Field
                name="confirmPassword"
                type="password"
                as={TextField}
                label="Confirm Password"
              />
              <Button className="btn-submit" type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default CompanyRegistrationForm;
