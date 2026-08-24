const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const contactRoutes = require("./routes/contact");
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { success: false, error: "Too many requests. Please try again later." },
});
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "11:11 Business Park API is running." });
});
app.use("/api/contact", contactLimiter, contactRoutes);
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found." });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(` http://localhost:${PORT}`);
});
