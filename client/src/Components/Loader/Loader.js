import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = ({ loading }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: 999,
        backdropFilter: "blur(3px)",
        transition: "opacity 0.3s",
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
