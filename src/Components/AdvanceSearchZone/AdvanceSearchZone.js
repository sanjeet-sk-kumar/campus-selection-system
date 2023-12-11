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
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Advanced Search
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: "16px" }}>
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
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Computer">Computer</MenuItem>
          <MenuItem value="Mechanical">Mechanical</MenuItem>
          <MenuItem value="EC">EC</MenuItem>
          <MenuItem value="Civil">Civil</MenuItem>
          <MenuItem value="Automobile">Automobile</MenuItem>
          <MenuItem value="Electrical">Electrical</MenuItem>
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
          <MenuItem value="Diploma">Diploma</MenuItem>
          <MenuItem value="BE/BTech">BE/BTech</MenuItem>
          <MenuItem value="ME/MTech">ME/MTech</MenuItem>
          <MenuItem value="BCA">BCA</MenuItem>
          <MenuItem value="MCA">MCA</MenuItem>
          <MenuItem value="BSC IT">BSC IT</MenuItem>
          <MenuItem value="MSC IT">MSC IT</MenuItem>
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
  );
};

export default AdvanceSearchZone;
