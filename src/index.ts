import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import authRoutes from "./routes/auth";
import portfolioRoutes from "./routes/portfolio";
import contactRoutes from "./routes/contact";
import uploadRoutes from "./routes/upload";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(async () => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log("DB connection error:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
