require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const AdminUser = require("./models/AdminUser");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/portfolio", require("./routes/portfolio"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/upload", require("./routes/upload"));

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected!");
   
  })
  .catch((err) => console.log("DB connection error:", err));

app.listen(process.env.PORT || 4000, () => console.log("Server running"));
