const express = require("express");
const router = express.Router();
const companyController = require("../controller/companyController");

router.post("/register", companyController.registerCompany);
router.get("/recent-companies", companyController.getRecentCompanies);

module.exports = router;
