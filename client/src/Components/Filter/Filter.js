import React, { useState } from "react";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Filter = ({
  filterOptions,
  selectedFilter,
  changeSelectedFilter,
  headerText,
}) => {
  //   const [selectedFilter, setSelectedFilter] = useState("");

  //   const handleFilterClick = (filter) => {
  //     setSelectedFilter(filter);
  //     // Implement logic to filter jobs based on the selected filter
  //     console.log("Filter Applied:", filter);
  //   };
  return (
    <>
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        {headerText}
      </Typography>
      <Paper
        elevation={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          marginBottom: "16px",
          flexDirection: "column",
        }}
      >
        {filterOptions.map((filter, index) => (
          <Button
            key={index}
            variant={selectedFilter === filter ? "contained" : "outlined"}
            color="primary"
            style={{ marginRight: "8px", marginBottom: "8px" }}
            onClick={() => changeSelectedFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </Paper>
    </>
  );
};

export default Filter;
