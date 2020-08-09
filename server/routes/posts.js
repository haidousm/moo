const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// @desc Get all posts
// @route GET /posts

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

// @desc Create New Post
// @route POST /posts

router.post("/", (req, res) => {
    const newPost = new Post({
        content: req.body.post.toString(),
        user: req.user._id,
        createdAt: new Date(),
    });

    newPost.save((error, newPost) => {
        if (error) {
            return console.error(error);
        }

        console.log("Successfully saved Post to DB");
    });
});

module.exports = router;
