const jwt = require("jsonwebtoken");
const streamer = require("../controllers/streamerController");

function generateToken(streamer) {
  const payload = {
    id: streamer.id, // Use streamer's unique identifier
    username: streamer.username,
    email: streamer.email,
  };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: "1h", // Token expires in 1 hour
  };

  return jwt.sign(payload, secret, options);
}

module.exports = { generateToken };
