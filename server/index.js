const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const monk = require("monk");
const dotenv = require('dotenv').config({ path: `${__dirname}/config/config.env`});

const app = express();

const db = monk("localhost/posts");
const posts = db.get("posts");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


// @desc Fetch Posts
// @route GET /posts

app.get("/posts", (req, res) => {

    posts.find().then(posts => {

        res.json(posts);

    })

})

// @desc Create New Post
// @route POST /posts

app.post("/posts", (req, res) => {

    const newPost = {

        content: req.body.post.toString(),
        created: new Date()

    }

    console.log(newPost);
    posts.insert(newPost).then(dbResponse => res.json(dbResponse)).catch(console.error);

})

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));