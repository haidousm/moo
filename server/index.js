const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const monk = require("monk");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = monk("localhost/posts");
const posts = db.get("posts");
 
const PORT = process.env.PORT || 5000;

app.get("/posts", (req, res) => {

    posts.find().then(posts => {

        res.json(posts);

    })

})

app.post("/posts", (req, res) => {

    const newPost = {

        content: req.body.post.toString(),
        created: new Date()

    }

    console.log(newPost);
    posts.insert(newPost).then(dbResponse => res.json(dbResponse)).catch(console.error);

})

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));