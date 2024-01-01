// import db from "../db";
const db = require("../db");
const prisma = require("../prisma/prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    companies: async () => {
      return await prisma.companyRegistration.findMany({
        orderBy: { createdAt: "desc" },
      });
    },
    recentCompanies: async (_, { limit = 5 }) => {
      try {
        const recentCompanies = await prisma.companyRegistration.findMany({
          take: limit,
          orderBy: { createdAt: "desc" },
        });
        return recentCompanies;
      } catch (error) {
        console.error("Error fetching recent companies:", error);
        throw new Error("Error fetching recent companies");
      }
    },
    postedJobs: async (_, { companyId }) => {
      try {
        // Fetch all posted jobs from the database using Prisma
        const postedJobs = await prisma.job.findMany({
          where: {
            companyId,
          },
        });

        return postedJobs;
      } catch (error) {
        console.error("Error fetching posted jobs:", error);
        throw new Error("Failed to fetch posted jobs");
      }
    },
  },
  Mutation: {
    registerCompany: async (_, { companyData }) => {
      console.log(companyData, "companyData");

      const {
        companyName,
        address,
        city,
        state,
        pincode,
        contactPersonName,
        mobile,
        contactNo,
        email,
        website,
        username,
        password,
      } = companyData;
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt

      try {
        const newCompany = await prisma.companyRegistration.create({
          data: {
            companyName,
            address,
            city,
            state,
            pincode,
            contactPersonName,
            mobile,
            contactNo,
            emailId: email,
            website,
            username,
            password: hashedPassword,
          },
        });

        return newCompany;
      } catch (error) {
        console.error("Error registering company:", error);
        throw new Error("Error registering company");
      }
    },
    companyLogin: async (_, { credential }) => {
      console.log(credential, "credential");
      const { username, password } = credential;

      // Retrieve company based on the provided username
      const company = await prisma.companyRegistration.findUnique({
        where: { username },
      });

      console.log(company);

      if (!company) {
        throw new Error("Invalid username or password");
      }

      // Retrieve hashed password from the database
      const storedHashedPassword = company.password;

      // Hash the provided password
      // const hashedPassword = await bcrypt.hash(password, 10); // Hash the provided password

      const passwordValid = await bcrypt.compare(
        password,
        storedHashedPassword
      );

      if (!passwordValid) {
        throw new Error("Invalid username or password");
      }

      const token = jwt.sign(
        { companyId: company.id, userType: "company" },
        "your_company_secret_key",
        { expiresIn: "1h" }
      );

      return {
        token,
        company,
      };
    },
    addJob: async (_, { jobData }) => {
      try {
        const {
          companyId,
          jobCategory,
          requiredSkill,
          role,
          minQualification,
          extraSkill,
          maxAge,
          expectedSalary,
          jobLocation,
          workingHour,
          jobDescription,
          lastApplyDate,
          entryDate,
        } = jobData;
        console.log(prisma, "prisma");
        const newJob = await prisma.job.create({
          data: {
            company: { connect: { id: companyId } },
            jobCategory,
            requiredSkill,
            role,
            minQualification,
            extraSkill,
            maxAge,
            expectedSalary: 500,
            jobLocation,
            workingHour,
            jobDescription,
            lastApplyDate: new Date().toISOString(),
            entryDate: new Date().toISOString(),
          },
        });

        // Return the created job
        return newJob;
      } catch (error) {
        console.error("Error adding job:", error);
        throw new Error("Error adding job");
      }
    },
  },
};

module.exports = resolvers;
