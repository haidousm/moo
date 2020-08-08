const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Dotenv config
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});

// Passport config
require("./config/passport")(passport);

// MongoDB config
connectDB();

const app = express();
const PORT = process.env.PORT;

// Middleware

app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", require("./routes/posts"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));
