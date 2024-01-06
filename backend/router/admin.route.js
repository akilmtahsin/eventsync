const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getAllSpeaker } = require("../controller/admin.controller");


router.get("/get-all-speaker", getAllSpeaker);


module.exports = router;