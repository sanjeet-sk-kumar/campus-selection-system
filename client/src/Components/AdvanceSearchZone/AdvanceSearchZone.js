import "./AdvanceSearchZone.scss";

import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const AdvanceSearchZone = () => {
  const [category, setCategory] = useState("");
  const [qualification, setQualification] = useState("");
  const [skill, setSkill] = useState("");
  const [searchBy, setSearchBy] = useState("company");

  const handleSearch = () => {
    // Implement search logic based on selected filters
    console.log("Search clicked");
    console.log("Category:", category);
    console.log("Qualification:", qualification);
    console.log("Skill:", skill);
    console.log("Search By:", searchBy);
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
        Advanced Search
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <FormControl
          fullWidth
          sx={{ marginBottom: "16px" }}
          className="advance-search-zone"
        >
          <InputLabel id="category">Category</InputLabel>

          <Select
            labelId="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            fullWidth
            label="Category"
            variant="outlined"
          >
            {/* <MenuItem value="" disabled>
            Category
          </MenuItem> */}
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Computer Science<">Computer Science</MenuItem>
            <MenuItem value="Management">Management</MenuItem>
            {/* <MenuItem value="EC">EC</MenuItem>
            <MenuItem value="Civil">Civil</MenuItem>
            <MenuItem value="Automobile">Automobile</MenuItem>
            <MenuItem value="Electrical">Electrical</MenuItem> */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "16px" }}>
          <Select
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            displayEmpty
            fullWidth
            variant="outlined"
          >
            <MenuItem value="" disabled>
              Qualification
            </MenuItem>
            <MenuItem value="MBA">MBA</MenuItem>
            <MenuItem value="MCA">MCA</MenuItem>
            <MenuItem value="M.Com">M.Com</MenuItem>
            <MenuItem value="Msc">Msc</MenuItem>
            {/* <MenuItem value="BCA">BCA</MenuItem>
            <MenuItem value="BSC IT">BSC IT</MenuItem>
            <MenuItem value="MSC IT">MSC IT</MenuItem> */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "16px" }}>
          <Select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            displayEmpty
            fullWidth
            variant="outlined"
          >
            <MenuItem value="" disabled>
              Skill
            </MenuItem>
            <MenuItem value="HTML">HTML</MenuItem>
            <MenuItem value="CSS">CSS</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="JS">JS</MenuItem>
            <MenuItem value="Angular">Angular</MenuItem>
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="MongoDB">MongoDB</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1" gutterBottom>
            Choose between:
          </Typography>
          <RadioGroup
            row
            aria-label="search-by"
            name="search-by"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <FormControlLabel
              value="company"
              control={<Radio />}
              label="Company"
            />
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
          </RadioGroup>
        </FormControl>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AdvanceSearchZone;
