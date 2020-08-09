const express = require("express");
const router = express.Router();

const passport = require("passport");

// @desc    Auth with Google
// @route   GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: process.env.CLIENT_URI_LOGIN,
        successRedirect: process.env.CLIENT_URI_DASHBOARD,
    })
);

// @desc    Logout user
// @route   GET /auth/logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URI_LOGIN);
});

module.exports = router;
