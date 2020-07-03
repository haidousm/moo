const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Get user info
// @route GET /user

router.get("/", (req, res) => {
    res.send(req.user);
});

module.exports = router;
