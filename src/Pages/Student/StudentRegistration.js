import React, { useState } from "react";

import AdditionalDetailsForm from "./AdditionalDetailsForm";
import Paper from "@mui/material/Paper";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Typography from "@mui/material/Typography";

const StudentRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    setStep(step + 1);
  };

  const handleResetForm = () => {
    setFormData({});
    setStep(1);
  };

  const handleSubmitForm = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    // Submit formData to backend or perform necessary actions
    console.log("Submitted Form Data:", formData);
  };

  return (
    <div>
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Register as New Student
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        {step === 1 ? (
          <PersonalDetailsForm handleSubmit={handleNextStep} />
        ) : step === 2 ? (
          <AdditionalDetailsForm handleSubmit={handleSubmitForm} />
        ) : null}
        {step !== 1 && <button onClick={handleResetForm}>Reset</button>}
      </Paper>
    </div>
  );
};

export default StudentRegistration;
