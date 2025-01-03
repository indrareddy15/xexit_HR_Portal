const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const adminExitInterview = require("./routes/adminExitInterview");
const adminResignations = require("./routes/adminResignations");
const resignationRoutes = require("./routes/resignationRoutes");
const exitInterviewRoutes = require("./routes/exitInterviewRoutes");
const connectDB = require("./db/db");

const app = express();
const PORT = process.env.PORT || 8082;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminResignations);
app.use("/api/admin", adminExitInterview);
app.use("/api/user", resignationRoutes);
app.use("/api/user", exitInterviewRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});
