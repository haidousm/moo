const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});
const morgan = require("morgan");

// MongoDB config
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/posts", require("./routes/posts"));

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));
