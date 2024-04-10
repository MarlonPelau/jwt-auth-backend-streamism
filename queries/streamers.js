const db = require("../db/dbConfig");
/**
 * Finds a streamer by their username.
 * @param {string} username - The username of the streamer to find.
 * @returns {Promise<object|null>} The streamer object if found, otherwise null.
 */
const findStreamerByUsername = async (username) => {
  try {
    const query = "SELECT * FROM streamers WHERE username = $1";

    const streamer = await db.oneOrNone(query, username);

    return streamer;
  } catch (error) {
    console.error("Error finding streamer by username:", error);
    throw error;
  }
};

const createStreamer = async ({ username, passwordHash, email }) => {
  const query = `
      INSERT INTO streamers (username, password_hash, email)
      VALUES ($1, $2, $3)
      RETURNING id, username, email; 
    `;
  const newStreamer = await db.one(query, [username, passwordHash, email]);
  return newStreamer;
};

module.exports = {
  findStreamerByUsername,
  createStreamer,
};
