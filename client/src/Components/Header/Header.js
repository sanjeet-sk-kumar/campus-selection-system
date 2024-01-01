import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../images/PU_Logo_Full.png";

const Header = ({ isLogoVisible, options }) => {
  console.log(options);
  return (
    <AppBar position="static">
      <Toolbar>
        {isLogoVisible && (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={logo} alt="Pondicherry University" />
          </IconButton>
        )}
        <div className="header-right-tool">
          {options.map((option) => {
            return (
              <Button key={option.optionId} color="inherit">
                {option.optionName}
              </Button>
            );
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
