import "./PersonalDetailsForm.scss";

import { Button, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";

import React from "react";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const PersonalDetailsForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        birthdate: "",
        gender: "",
        mobile: "",
        email: "",
        enrollNo: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className="form-container">
        <Field name="name" as={TextField} label="Name" />
        <Field name="surname" as={TextField} label="Surname" />
        <Field name="address" as={TextField} label="Address" />
        <Field name="city" as={TextField} label="City" />
        <Field name="state" as={TextField} label="State" />
        <Field name="pincode" as={TextField} label="Pincode" />
        <Field name="birthdate" type="date" as={TextField} label="Birthdate" />
        <Field name="gender" as={TextField} label="Gender" select>
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <Field name="mobile" as={TextField} label="Mobile" />
        <Field name="email" type="email" as={TextField} label="Email ID" />
        <Field name="enrollNo" as={TextField} label="Enroll No" />
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
        <div className="form-buttons">
          <Button type="submit">Continue</Button>
          <Button type="reset">Reset</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default PersonalDetailsForm;
