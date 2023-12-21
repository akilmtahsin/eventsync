const express = require("express");
const { Profile } = require("../controller/organizer.controller");

const router = express.Router();


router.get("/profile", Profile );


module.exports = router;