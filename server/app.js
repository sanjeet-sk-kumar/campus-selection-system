const express = require("express");
const cors = require("cors");

const app = express();
const companyRegistrationRoutes = require("./src/companyRegistrationAPI");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: "GET,POST", // Allow specific HTTP methods
    // Other CORS configurations
  })
);
// Mounting companyRegistrationRoutes
app.use("/api", companyRegistrationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
