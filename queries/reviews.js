const platforms = require("../controllers/platformsController.js");
const db = require("../db/dbConfig.js");

//Grab Streamers And Reviews INDEX
const grabStreamerAndReview = async (platform_id) => {
  try {
    const streamerAndReviews = await db.any(
      "SELECT reviews.*, streamers.username FROM reviews LEFT JOIN streamers ON reviews.streamer_id = streamers.id WHERE platform_id = $1",
      platform_id
    );
    return streamerAndReviews;
  } catch (error) {
    return error;
  }
};

//Show
const getOneReview = async (id) => {
  try {
    const oneReview = await db.one(`SELECT * FROM reviews WHERE id=$1`, id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

//Create
const createReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (content, rating, platform_id, streamer_id, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        review.content,
        review.rating,
        review.platform_id,
        review.streamer_id,
        review.created_at,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

//Update
const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET content=$1, rating=$2, updated_at=$3, platform_id=$4 WHERE id=$5 RETURNING *",
      [
        review.content,
        review.rating,
        review.updated_at,
        review.platform_id,
        review.review_id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getOneReview,
  createReview,
  deleteReview,
  updateReview,
  grabStreamerAndReview,
};
