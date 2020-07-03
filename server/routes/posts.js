const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// @desc Get all posts
// @route GET /posts

router.get("/", (req, res) => {
    const posts = Post.find(function (error, posts) {
        if (error) return console.error(error);
        res.json(posts);
    });
});

// @desc Create New Post
// @route POST /posts

router.post("/", (req, res) => {
    const newPost = new Post({
        content: req.body.post.toString(),
        created: new Date(),
    });

    newPost.save((error, newPost) => {
        if (error) {
            return console.error(error);
        }

        console.log("Successfully saved Post to DB");
    });
});

module.exports = router;
