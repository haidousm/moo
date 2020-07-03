const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// MongoDB config
connectDB();

const app = express();

// Passport config
require("./config/passport")(passport);

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(
    session({
        secret: "moooo",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(PORT, () => console.log(`Server listening @ port ${PORT}`));
