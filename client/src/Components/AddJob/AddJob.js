import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import {
  categories,
  locations,
  qualifications,
  roles,
  salary,
  skills,
} from "../../.config";

import { ADD_JOB } from "../../queries/company";
import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";
import { useCompany } from "../../context/companyContext";
import { useMutation } from "@apollo/client";

const AddJob = () => {
  const { company } = useCompany();
  const [addJob] = useMutation(ADD_JOB);
  console.log(company, "company");
  const initialValues = {
    companyName: company?.companyName,
    jobCategory: "",
    requiredSkill: "",
    role: "",
    minQualification: "",
    extraSkill: "",
    maxAge: 25,
    expectedSalary: 0,
    jobLocation: "",
    workingHour: "",
    jobDescription: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { companyName, ...jobData } = values;
      const { data } = await addJob({
        variables: {
          jobData: {
            ...jobData,
            companyId: +company.id,
          },
        },
      });
      console.log("Job added:", data.addJob);
      resetForm();
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <Container maxWidth="100%">
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Add New Job
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="companyName">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    disabled
                    margin="normal"
                  />
                )}
              </Field>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="job-category-label">
                  Job Category
                </InputLabel>
                <Field
                  as={Select}
                  name="jobCategory"
                  labelId="job-category-label"
                  variant="outlined"
                >
                  {categories.map((skill, index) => (
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
                <InputLabel htmlFor="role-label">Role</InputLabel>
                <Field
                  as={Select}
                  name="role"
                  labelId="role-label"
                  variant="outlined"
                >
                  {roles.map((skill, index) => (
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
                <InputLabel htmlFor="minQualification-label">
                  Min. Qualification
                </InputLabel>
                <Field
                  as={Select}
                  name="minQualification"
                  labelId="minQualification-label"
                  variant="outlined"
                >
                  {qualifications.map((qualification, index) => (
                    <MenuItem key={index} value={qualification.value}>
                      {qualification.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="requiredSkill-label">
                  Required Skill
                </InputLabel>
                <Field
                  as={Select}
                  name="requiredSkill"
                  labelId="requiredSkill-label"
                  variant="outlined"
                >
                  {skills.map((skill, index) => (
                    <MenuItem key={index} value={skill.value}>
                      {skill.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Field name="extraSkill">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Extra Skill"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>

              <Field name="maxAge">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Max Age"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>

              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="jobLocation-label">
                  Job Location
                </InputLabel>
                <Field
                  as={Select}
                  name="jobLocation"
                  labelId="jobLocation-label"
                  variant="outlined"
                >
                  {locations.map((location, index) => (
                    <MenuItem key={index} value={location.value}>
                      {location.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "16px" }}
              >
                <InputLabel htmlFor="expectedSalary-label">Salary</InputLabel>
                <Field
                  as={Select}
                  name="expectedSalary"
                  labelId="expectedSalary-label"
                  variant="outlined"
                >
                  {salary.map((sal, index) => (
                    <MenuItem key={index} value={sal.value}>
                      {sal.label}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              {/* <Field name="role">
              {({ field }) => (
                <Select
                  {...field}
                  placeholder="Role"
                  label="Role"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                >
                  {roles.map((role, index) => (
                    <MenuItem key={index} value={role.value}>
                      {role.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Field> */}
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default AddJob;
