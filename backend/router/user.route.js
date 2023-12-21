const express = require("express");
const { Signup, Login, Profile } = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", Signup );
router.post("/login", Login);
router.get("/:id", Profile);


module.exports = router;
