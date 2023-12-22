import "./RecentCompanyList.scss";

import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";

const RecentCompanyList = () => {
  const [recentCompanies, setRecentCompanies] = useState([]);

  useEffect(() => {
    const fetchRecentCompanies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/get-recent-companies"
        );
        console.log(response);
        setRecentCompanies(response?.data || []);
      } catch (error) {
        console.error("Error fetching recent companies:", error);
      }
    };

    fetchRecentCompanies();
  }, []);

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
              <li key={company?._id} className="company-item">
                <a href={company.companyWebsite} className="company-link">
                  {company?.companyName}
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
