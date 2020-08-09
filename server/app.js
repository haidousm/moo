const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const connectDB = require("./config/db");

const passport = require("passport");
const setupPassport = require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const morgan = require("morgan");

// Dotenv config
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});

// Passport config
setupPassport(passport);

// MongoDB config
connectDB();

const app = express();
const PORT = process.env.PORT;

// CORS setup
app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    })
);

// BodyParser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Morgan setup
app.use(morgan("dev"));

// Sessions setup
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        cookie: { sameSite: "none" },
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));
