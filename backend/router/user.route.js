const express = require("express");
const { Signup, Login, viewProfile, updateProfile } = require("../controller/user.controller");
const auth = require("../middleware/auth")
const router = express.Router();

router.post("/signup", Signup );
router.post("/login",  Login);
router.get("/profile", auth, viewProfile);
router.patch("/update", auth, updateProfile);



module.exports = router;
