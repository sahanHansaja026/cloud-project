// Assuming you already have the necessary imports and middleware set up
const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Route to get reservation information by ID
router.get("/reservation/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const reservation = await Post.findOne({ _id: id }).exec();
    if (!reservation) {
      return res.status(404).json({ success: false, message: "Reservation not found" });
    }
    return res.status(200).json({ success: true, reservation });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

