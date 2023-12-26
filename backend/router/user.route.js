const express = require("express");
const { Signup, Login, viewProfile, updateProfile } = require("../controller/user.controller");
const auth = require("../middleware/auth")
const router = express.Router();

router.post("/signup", Signup );
router.post("/login",  Login);
router.get("/:id", auth, viewProfile);
router.patch("/update/:id", auth, updateProfile);


module.exports = router;
