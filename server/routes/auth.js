const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/",
        successRedirect: "http://localhost:3000/dashboard",
    })
);

// @desc    Logout user
// @route   /auth/logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/");
});

// @desc Get user profile
// @route /auth/user

router.get("/user", (req, res) => {
    if (req.user) {
        res.statusCode = 200;
        res.json(req.user);
    } else {
        res.statusCode = 401;
        res.send();
    }
});

module.exports = router;
