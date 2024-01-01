import { gql } from "@apollo/client";

export const GET_RECENT_COMPANIES = gql`
  query GetRecentCompanies($limit: Int!) {
    recentCompanies(limit: $limit) {
      id
      address
      companyName
    }
  }
`;

export const REGISTER_COMPANY = gql`
  mutation RegisterCompany($companyData: CreateCompanyInput!) {
    registerCompany(companyData: $companyData) {
      id
      companyName
    }
  }
`;

export const LOGIN_COMPANY = gql`
  mutation CompanyLogin($credential: CompanyLoginInput!) {
    companyLogin(credential: $credential) {
      token
      company {
        id
        companyName
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation AddJob($jobData: CreateJobInput!) {
    addJob(jobData: $jobData) {
      companyId
      jobCategory
      requiredSkill
      role
    }
  }
`;
