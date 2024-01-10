const express = require("express");
const { createEvent, findEventById } = require("../controller/event.controller");
const router = express.Router();
const auth = require("../middleware/auth")


router.post("/create-event", auth, createEvent);
router.post("/create-event", auth, createEvent);
router.get("/find/:id", auth, findEventById);

module.exports = router;