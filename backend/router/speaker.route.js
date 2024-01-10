const express = require("express");
const {
  getAllSpeaker,
  createSpeaker,
  getOneSpeaker,
  updateSpeaker,
  deleteSpeaker,
  rateSpeaker,
} = require("../controller/speaker.controller");

const auth = require('../middleware/auth');

const router = express.Router();

router.get("/all",auth, getAllSpeaker);
router.get("/profile/:id",auth, getOneSpeaker);
router.post("/create",auth, createSpeaker);
router.put("/update/:id",auth, updateSpeaker);
router.delete("/delete/:id",auth, deleteSpeaker);
router.put("/rate/:id",auth, rateSpeaker);

module.exports = router;
