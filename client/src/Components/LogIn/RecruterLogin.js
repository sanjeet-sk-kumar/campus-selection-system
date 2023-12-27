import "./StudentLogin.css";

import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // minHeight: '100vh',
};

const formStyle = {
  width: "100%",
  // maxWidth: 360,
  // padding: '16px',
  border: "1px solid #ccc",
  borderTop: "0px",
  borderRadius: "0px 0px 8px 8px",
  textAlign: "center",
  boxSizing: "border-box",
};

const buttonStyle = {
  marginTop: "16px",
};
const StudentLogin = ({ setIsNewStudent, setIsNewCompany }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Implement login functionality using your authentication mechanism
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password clicked");
    // Redirect or provide instructions for password reset
  };

  const registerCompany = () => {
    setIsNewCompany(true);
    setIsNewStudent(false);
  };

  return (
    <div className="recruter-login">
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Recruter Login Area
      </Typography>
      <Box style={formContainerStyle}>
        <form style={formStyle} onSubmit={handleLogin}>
          <div className="form-group">
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              // margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={buttonStyle}
            >
              Login
            </Button>
          </div>

          <Typography variant="body2" align="center">
            <Button color="primary" onClick={registerCompany}>
              New Company?
            </Button>
          </Typography>
          <Typography variant="body2" align="center">
            <Link onClick={handleForgotPassword} color="textSecondary">
              Forgot password?
            </Link>
          </Typography>
        </form>
      </Box>
    </div>
  );
};

export default StudentLogin;
