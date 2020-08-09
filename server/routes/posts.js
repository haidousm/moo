const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// @desc Get all posts
// @route GET /posts/
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("user")
            .sort({ createdAt: "desc" });
        res.json(posts);
    } catch (error) {
        console.error(error);
    }
});

// @desc Create new post
// @route POST /posts/
router.post("/", async (req, res) => {
    const newPost = new Post({
        user: req.user._id,
        content: req.body.post.toString(),
        createdAt: new Date(),
    });
    try {
        await Post.create(newPost);
        console.log("Successfully saved post to DB");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
