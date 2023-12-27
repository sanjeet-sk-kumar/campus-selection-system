import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";

import React from "react";

const semesters = [
  { value: "1", label: "1st Semester" },
  { value: "2", label: "2nd Semester" },
  // Add other semester options as needed
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Java",
  "Other",
];

const AdditionalDetailsForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        collegeName: "",
        semester: "",
        education: "",
        branch: "",
        passingYear: "",
        cgpa: "",
        skills: [],
        resume: "",
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className="form-container">
        <Field name="collegeName" as={TextField} label="College Name" />
        <Field name="semester" as={TextField} label="Semester" select>
          {semesters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <Field name="education" as={TextField} label="Education" />
        <Field name="branch" as={TextField} label="Branch" />
        <Field name="passingYear" as={TextField} label="Passing Year" />
        <Field name="cgpa" as={TextField} label="CGPA" />
        <FormControl>
          <InputLabel id="skills-label">Skills</InputLabel>
          <Field name="skills" as={Select} labelId="skills-label" multiple>
            {skills.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        <Field name="resume" type="file" as={TextField} label="Upload Resume" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default AdditionalDetailsForm;
