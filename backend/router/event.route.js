const express = require("express");
const { createEvent } = require("../controller/event.controller");
const router = express.Router();
const auth = require("../middleware/auth")


router.post("/create-event", auth, createEvent);
router.post("/create-event", auth, createEvent);

module.exports = router;