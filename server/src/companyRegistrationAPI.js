const express = require("express");
const router = express.Router();
const fs = require("fs");

// Route for handling company registration
router.post("/save-company-registration", (req, res) => {
  const companyData = req.body;

  // Read the existing content of the file, if any
  fs.readFile("company_registration.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
      return;
    }

    let companyArray = [];
    try {
      // Parse the existing content as JSON array, if it's valid JSON
      if (data) {
        companyArray = JSON.parse(data);
        if (!Array.isArray(companyArray)) {
          throw new Error("Existing data is not an array");
        }
      }
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send("Existing data is not in expected format");
      return;
    }

    // Add the new company data to the array
    companyArray.push(companyData);

    // Write the updated array back to the file
    const updatedData = JSON.stringify(companyArray, null, 2);

    fs.writeFile("company_registration.txt", updatedData, (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        res.status(500).send("Error writing data to file");
      } else {
        res.status(200).send("Company registration data appended to file");
      }
    });
  });
});

router.get("/get-recent-companies", (req, res) => {
  fs.readFile("company_registration.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
      return;
    }

    let companyArray = [];
    try {
      // Parse the existing content as JSON array, if it's valid JSON
      if (data) {
        companyArray = JSON.parse(data);
        if (!Array.isArray(companyArray)) {
          throw new Error("Existing data is not an array");
        }
      }
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send("Existing data is not in expected format");
      return;
    }

    // Get the most recent 5 entries (assuming they're sorted by time)
    const recentCompanies = companyArray.slice(-5);

    res.status(200).json(recentCompanies);
  });
});

module.exports = router;
