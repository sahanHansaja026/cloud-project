const express = require("express");
const Posts = require("../models/comment");

const router = express.Router();

//get reservation deatails
router.get("/pos", async (req, res) => {
    try {
      const posts = await Posts.find().exec();
      return res.status(200).json({ success: true, existingPosts: posts });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

  module.exports = router;