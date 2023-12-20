const express = require("express");
const {
  getAllSpeaker,
  createSpeaker,
  getOneSpeaker,
  updateSpeaker,
  deleteSpeaker,
} = require("../controller/speaker.controller");

const router = express.Router();

router.get("/", getAllSpeaker);
router.get("/:id", getOneSpeaker);
router.post("/create", createSpeaker);
router.patch("/update/:id", updateSpeaker);
router.delete("/delete/:id", deleteSpeaker);

module.exports = router;
