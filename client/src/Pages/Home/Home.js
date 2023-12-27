import "./Home.css";

import React, { useState } from "react";

import AdvanceSearchZone from "../../Components/AdvanceSearchZone/AdvanceSearchZone";
import Alert from "@mui/material/Alert";
import CompanyRegistrationForm from "../Company/CompanyRegistrationForm";
import Header from "../../Components/Header/Header";
import JobFilter from "../../Components/JobFilter/JobFilter";
import RecentCompanyList from "../Company/RecentCompanyList";
import RecruterLogin from "../../Components/LogIn/RecruterLogin";
import StudentLogin from "../../Components/LogIn/StudentLogin";
import StudentRegistration from "../Student/StudentRegistration";

const Home = () => {
  const [isNewStudent, setIsNewStudent] = useState(false);
  const [isNewCompany, setIsNewCompany] = useState(false);
  const [notifications, setNotifications] = useState(undefined);
  console.log(notifications, "notifications");
  return (
    <div>
      {notifications ? (
        <Alert severity={notifications?.severity} variant="filled">
          {notifications?.info}
        </Alert>
      ) : null}
      <Header />
      <div className="home-body-container">
        <div className="home-body-student">
          <StudentLogin
            isNewStudent={isNewStudent}
            setIsNewStudent={setIsNewStudent}
            setIsNewCompany={setIsNewCompany}
          />
          <JobFilter />
        </div>
        <div className="home-body-advance">
          <AdvanceSearchZone />
          {isNewStudent ? <StudentRegistration /> : null}
          {isNewCompany ? (
            <CompanyRegistrationForm setNotifications={setNotifications} />
          ) : null}
        </div>
        <div className="home-body-recruter">
          <RecruterLogin
            setIsNewStudent={setIsNewStudent}
            setIsNewCompany={setIsNewCompany}
          />
          <RecentCompanyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
