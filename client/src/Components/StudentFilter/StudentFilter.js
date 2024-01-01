import { Field, Form, Formik } from "formik";
import { categories, qualifications, skills } from "../../.config";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import React from "react";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const StudentFilter = () => {
  const onSubmit = (values) => {
    console.log(values, "values");
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
        Find Students Here within a Second
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Formik
          initialValues={{
            category: "",
            skill: "",
            qualification: "",
          }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Field
                  as={Select}
                  name="category"
                  labelId="category-select"
                  variant="outlined"
                >
                  {categories.map((category, index) => (
                    <MenuItem key={index} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="skill-select">Skills</InputLabel>
                <Field
                  as={Select}
                  name="skill"
                  labelId="skill-select"
                  variant="outlined"
                >
                  {skills.map((skill, index) => (
                    <MenuItem key={index} value={skill.value}>
                      {skill.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="qualification-select">
                  Qualification
                </InputLabel>
                <Field
                  as={Select}
                  name="qualification"
                  labelId="qualification-select"
                  variant="outlined"
                >
                  {qualifications.map((qualification, index) => (
                    <MenuItem key={index} value={qualification.value}>
                      {qualification.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
                Filter
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default StudentFilter;
