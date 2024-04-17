const express = require("express");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
const { findStreamerByUsername, createStreamer } = require("../queries/streamers");
const { authenticateToken } = require("../middlewares/authenticateToken");
const auth = express.Router();

// Login route
auth.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log('Line 11_____', req.body) // this line is OK

  try {
    const streamer = await findStreamerByUsername(username);
    console.log('streamer', streamer) // returns NULL

    if (!streamer) return res.status(401).json({ message: "Invalid credentials" });

    const validPassword = await bcrypt.compare(password, streamer.password_hash);
    console.log(validPassword)

    if (!validPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(streamer);

    res.status(200).json({
      message: "Logged in successfully",
      streamer,
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred during the login process." });
  }
});

// Register route
auth.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  console.log('username etc......', req.body) // error here

  try {
    // Check if streamer already exists
    const existingStreamer = await findStreamerByUsername(username);

    if (existingStreamer) {
      return res.status(409).json({ message: "Username already taken" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create streamer in the database
    const newStreamer = await createStreamer({
      username,
      passwordHash: hashedPassword,
      email,
    });

    console.log(newStreamer)

    const token = generateToken(newStreamer);

    if (token) {
      return res.status(201).json({
        message: "User registered successfully",
        newStreamer,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred during the registration process." });
  }
});

auth.get("/check-auth", authenticateToken, (req, res) => {
  // Assuming authenticateToken middleware adds streamer info to req.streamer

  if (req.streamer) {
    const { streamer } = req;
    return res.status(200).json({
      isAuthenticated: true,
      streamer: {
        streamer,
      },
    });
  } else {
    // If for some reason, req.streamer is not set, treat as not authenticated
    res.status(401).json({ isAuthenticated: false });
  }
});

auth.get("/streamer", authenticateToken, async (req, res) => {
  const { streamer } = req;
  try {
    if (!streamer) {
      return res.status(404).json({ message: "Streamer not found" });
    }
    if (streamer)
      // Return the streamer information, excluding sensitive data like password
      res.status(200).json({
        streamer: {
          id: streamer.id,
          username: streamer.username,
          email: streamer.email,
        },
      });
  } catch (error) {
    console.error("Error fetching streamer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = auth;
