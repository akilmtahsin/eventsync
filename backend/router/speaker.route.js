const express = require("express");
const {
  getAllSpeaker,
  createSpeaker,
  getOneSpeaker,
  updateSpeaker,
  deleteSpeaker,
} = require("../controller/speaker.controller");

const auth = require('../middleware/auth');

const router = express.Router();

router.get("/all",auth, getAllSpeaker);
router.get("/profile/:id",auth, getOneSpeaker);
router.post("/create",auth, createSpeaker);
router.patch("/update/:id",auth, updateSpeaker);
router.delete("/delete/:id",auth, deleteSpeaker);

module.exports = router;
