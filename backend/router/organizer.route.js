const express = require("express");
const { Profile } = require("../controller/organizer.controller");

const router = express.Router();

const auth = require('../middleware/auth');


router.get("/profile/:id",auth, Profile );


module.exports = router;