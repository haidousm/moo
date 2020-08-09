const express = require("express");
const router = express.Router();

// @desc Get user profile
// @route GET /users/user
router.get("/user", (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.statusCode(401).send();
    }
});

module.exports = router;
