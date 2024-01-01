import AddJob from "../../Components/AddJob/AddJob";
import Box from "@mui/material/Box";
import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import { POSTED_JOB } from "../../queries/company";
import PostedJobsList from "../../Components/PostedJobsList/PostedJobsList";
import StudentFilter from "../../Components/StudentFilter/StudentFilter";
import Typography from "@mui/material/Typography";
import { useCompany } from "../../context/companyContext";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const menuOptions = [
  { optionId: 1, optionName: "Home" },
  { optionId: 2, optionName: "View Posted Jobs" },
  { optionId: 3, optionName: "Add New Job" },
  { optionId: 4, optionName: "Message" },
  { optionId: 5, optionName: "About us" },
  { optionId: 6, optionName: "Contact us" },
];

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // minHeight: '100vh',
};

export const Company = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { company } = useCompany();
  const { data, loading } = useQuery(POSTED_JOB);
  console.log(data);

  return (
    <>
      <Header options={menuOptions} isLogoVisible={false}></Header>
      <div className="home-body-container">
        <div className="home-body-student">
          <Filter
            headerText={`Welcome ${company.companyName}`}
            filterOptions={[
              "My Account",
              "Add New Job",
              "View Posted Job",
              "Exam",
              "Logout",
            ]}
            selectedFilter={selectedFilter}
            changeSelectedFilter={(filter) => {
              setSelectedFilter(filter);
              console.log("Filter Applied:", filter);
            }}
          />
        </div>
        <div className="home-body-advance">
          <StudentFilter categories={[{ id: 1, lable: "", value: "" }]} />
          {selectedFilter === "Add New Job" && <AddJob />}
          {selectedFilter === "View Posted Job" && <PostedJobsList />}
        </div>
        <div className="home-body-recruter">
          {/* <RecruterLogin
            setIsNewStudent={setIsNewStudent}
            setIsNewCompany={setIsNewCompany}
          />
          <RecentCompanyList /> */}
        </div>
      </div>
    </>
  );
};
