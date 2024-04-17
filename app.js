// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const cron = require("node-cron");
// const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const streamerController = require("./controllers/streamerController");
// const reviewsController = require("./controllers/reviewsController");
const platformsController = require("./controllers/platformsController");
const authController = require("./controllers/authController");

// CONFIGURATION
const app = express();

// cron job to attempt to prevent render from sleeping
cron.schedule("*/5 * * * *", () => {
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  console.log(`Running a task every 5 minutes. Current time: ${currentTime}`);
});

// MIDDLEWARE change origin to your frontend netlify address for deployment
app.use(
  cors({
    origin: "http://localhost:3000", credentials: true,
    // origin: "https://main--jwt-auth-10-3.netlify.app/",
  })
);
app.use(express.json());
app.use(cookieParser());
// const csrfProtection = csrf({ cookie: true })

// app.use(csrfProtection)

// app.use((req, res, next) => {
//   res.cookie('XSRF-TOKEN', req.csrfToken())
//   next()
// })

app.use("/api/streamers", streamerController)
// app.use("/api/reviews", reviewsController)
app.use("/api/platforms", platformsController)
app.use("/api/auth", authController);

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to Streamism!");
});

// 404 PAGE
app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
