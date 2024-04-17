const express = require("express");

const {
  getOneReview,
  createReview,
  deleteReview,
  updateReview,
  grabStreamerAndReview,
} = require("../queries/reviews.js");
const { getOnePlatform } = require("../queries/platforms.js");

const reviews = express.Router();

const { checkContentRating } = require("../validations/validateReview.js");

//Index Route (api/reviews/platforms/2)
reviews.get("/platforms/:platform_id", async (req, res) => {
  const { platform_id } = req.params;

  const allReviews = await grabStreamerAndReview(platform_id);

  const platform = await getOnePlatform(platform_id);

  if (platform_id) {
    res.status(200).json({ ...platform, allReviews });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Show Route (api/platforms/1/reviews/2)
reviews.get("/:review_id", async (req, res) => {
  const { platform_id, review_id } = req.params;

  const review = await getOneReview(review_id);

  const platform = await getOnePlatform(platform_id);

  if (review.platform_id === platform.id && review) {
    res.status(200).json({ ...platform, review });
  } else {
    res.status(500).json({ error: "Review not found" });
  }
});

//Create Route (api/platforms/2/reviews)
reviews.post("/", checkContentRating, async (req, res) => {
  const { platform_id } = req.params;
  console.log('checking this line 49 ____', req.body, platform_id)
  const newReview = await createReview({ ...req.body, platform_id });
  console.log('new review', newReview)
  if (newReview.id) {
    res.status(200).json(newReview);
  } else {
    res.status(500).json({ error: "Failed to create review." });
  }
});

//Delete Route (api/platforms/1/reviews/2)
reviews.delete("/:review_id", async (req, res) => {
  const { review_id } = req.params;

  const deletedReview = await deleteReview(review_id);

  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

//Update Route (api/platforms/1/reviews/2)
reviews.put("/:review_id", checkContentRating, async (req, res) => {
  const { platform_id, review_id } = req.params;
  const updatedReview = await updateReview({
    review_id,
    ...req.body,
    platform_id,
  });
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = reviews
