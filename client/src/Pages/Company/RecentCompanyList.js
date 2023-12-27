import "./RecentCompanyList.scss";

import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const RecentCompanyList = () => {
  const [recentCompanies, setRecentCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/companies/recent-companies"
        );
        const data = await response.json();
        console.log(data, "companies");
        setRecentCompanies(data.companies);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCompanies();
  }, []);

  console.log(recentCompanies, "recent co");

  return (
    <>
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Latest 5 Companies:
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <div className="company-list-container">
          {/* <h2>Recent Company Registrations</h2> */}
          <ul className="company-list">
            {recentCompanies.map((company) => (
              <li key={company?.id} className="company-item">
                <a href={company.company_website} className="company-link">
                  {company?.company_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </>
  );
};

export default RecentCompanyList;
