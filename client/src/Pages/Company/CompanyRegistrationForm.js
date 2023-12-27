import "./CompanyRegistrationForm.scss";

import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";

import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";

const CompanyRegistrationForm = ({ setNotifications }) => {
  const handleSubmit = async (values, { resetForm }) => {
    const companyData = {};
    for (let key in values) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
      );
      companyData[snakeKey] = values[key];
    }
    try {
      const response = await fetch(
        "http://localhost:5000/api/companies/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(companyData),
        }
      );

      const responseData = await response.json();
      console.log(responseData, "responseData");
      if (response.ok) {
        console.log("Company registered successfully:", responseData);
        await setNotifications({
          info: "Company registration successful",
          severity: "success",
        });
        resetForm();
      } else {
        console.error("Registration failed:", responseData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      await setNotifications({
        info: `Error during registration: ${error}`,
        severity: "error",
      });
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
