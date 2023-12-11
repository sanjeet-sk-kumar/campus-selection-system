import './Header.css'

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../images/PU_Logo_Full.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={logo} alt="Pondicherry University" />
        </IconButton>
        <div className="header-right-tool">
          <Button color="inherit">Home</Button>
          <Button color="inherit">New Company</Button>
          <Button color="inherit">New Student</Button>
          <Button color="inherit">College Info</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact US</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
