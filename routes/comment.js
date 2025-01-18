const express = require("express");
const Comment = require("../models/comment"); // Assuming comment is the correct model name
const Router = express.Router();

// Save comment route
Router.post("/comment/save", (req, res) => {
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then(() => {
      return res.status(200).json({
        success: "Comment saved successfully",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message,
      });
    });
});

Router.get("/comments", async (req, res) => { 
  try {
    const comments = await Comment.find().exec();
    return res.status(200).json({ success: true, existingComments: comments }); 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = Router;
