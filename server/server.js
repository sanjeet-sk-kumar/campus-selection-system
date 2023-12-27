const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;
const companyRoutes = require("./routes/companyRoutes");
app.use(express.json());
app.use(cors());
app.use("/api/companies", companyRoutes);

app.listen(port, () => console.log(`app is running on port: ${port}`));
