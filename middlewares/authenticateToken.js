const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const authHeader = await req.headers["authorization"];

  if (authHeader.includes("null"))
    return res.status(401).json({ message: "Unauthorized Streamer" });
  else {
    const token = authHeader && (await authHeader.split(" ")[1]);
    jwt.verify(token, process.env.JWT_SECRET, (err, streamer) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Forbidden" });
      }

      req.streamer = streamer;
      next();
    });
  }
};

module.exports = { authenticateToken };
