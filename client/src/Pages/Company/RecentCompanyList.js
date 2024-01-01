import "./RecentCompanyList.scss";

import React, { useEffect, useState } from "react";

import { GET_RECENT_COMPANIES } from "../../queries/company";
import Loader from "../../Components/Loader/Loader";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";

const RecentCompanyList = () => {
  const [recentCompanies, setRecentCompanies] = useState([]);
  const { data, loading } = useQuery(GET_RECENT_COMPANIES, {
    variables: { limit: 5 },
  });

  useEffect(() => {
    setRecentCompanies(data?.recentCompanies ?? []);
  }, [data]);

  return (
    <>
      {loading && <Loader loading={loading} />}
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
                <a href={company.website} className="company-link">
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
