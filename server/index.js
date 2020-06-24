const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

// MongoDB config
connectDB();
const Post = require("./models/Post");

const app = express();

// Passport config

//require("./config/passport")(passport);

// const db = monk("localhost/posts");
// const posts = db.get("posts");

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// app.use(
//     session({
//         secret: "moooo",
//         resave: false,
//         saveUninitialized: false,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// @desc Fetch Posts
// @route GET /posts

app.get("/posts", (req, res) => {
    const posts = Post.find(function (error, posts) {
        if (error) return console.error(error);
        res.json(posts);
    });
});

// @desc Create New Post
// @route POST /posts

app.post("/posts", (req, res) => {
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

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));
