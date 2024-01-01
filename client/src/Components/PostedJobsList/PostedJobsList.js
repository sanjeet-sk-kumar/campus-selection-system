import {
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import Loader from "../Loader/Loader";
import { POSTED_JOB } from "../../queries/company"; // Replace with your query definition
import React from "react";
import { useCompany } from "../../context/companyContext";
import { useQuery } from "@apollo/client";

const PostedJobsList = () => {
  const { company } = useCompany();
  const { loading, error, data } = useQuery(POSTED_JOB, {
    variables: { companyId: +company.id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Typography variant="body1">Error loading jobs.</Typography>;
  }

  const { postedJobs } = data;

  return (
    <div>
      <Typography
        variant="h5"
        bgcolor={"#3C76D2"}
        color={"#FFFFFF"}
        borderRadius={"8px 8px 0px 0px"}
        border={"1px solid #3C76D2"}
      >
        Posted Jobs
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <List>
          {postedJobs.map((job) => (
            <div key={job.jobId}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {job?.jobCategory}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Required Skill"
                  secondary={job?.requiredSkill}
                  color="red"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Qualification"
                  secondary={job?.minQualification}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Salary"
                  secondary={job?.expectedSalary}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Job Location"
                  secondary={job?.jobLocation}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Date of Posted"
                  secondary={job?.createdAt}
                />
              </ListItem>
              {/* <Divider /> */}
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default PostedJobsList;
