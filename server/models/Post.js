const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    content: { type: String, required: true },
    created: { type: Date, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
