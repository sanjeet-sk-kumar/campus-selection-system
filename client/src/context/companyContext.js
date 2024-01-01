import { createContext, useContext, useState } from "react";

import { LOGIN_COMPANY } from "../queries/company";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom"; // Import useHistory

const CompanyContext = createContext(undefined);

const CompanyProvider = ({ children }) => {
  const [isCompanyAuthenticated, setIsCompanyAuthenticated] = useState(false);
  const [logIn] = useMutation(LOGIN_COMPANY);
  const [company, setCompany] = useState();
  const navigate = useNavigate();

  const companyLogin = async (username, password) => {
    try {
      const { data } = await logIn({
        variables: { credential: { username, password } },
      });
      const { token, company } = data.companyLogin;
      setCompany(company);
      console.log(company, "company");
      localStorage.setItem("companyToken", token);
      setIsCompanyAuthenticated(true);

      navigate("/company-profile");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const companyLogout = () => {
    localStorage.removeItem("companyToken");
    setIsCompanyAuthenticated(false);
  };

  const value = {
    company,
    isCompanyAuthenticated,
    setIsCompanyAuthenticated,
    companyLogin,
    companyLogout,
  };

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};

const useCompany = () => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error(`useCompany must be used within a CompanyProvider`);
  }
  return context;
};

export { CompanyProvider, useCompany };
