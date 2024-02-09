const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllSpeaker,
  getAllEvents,
  getAllOrganizers,
  getAllUsers,
  getAllPayments,
  getAllTickets,
  findEventById,
  findEventBySpeakerId,
  approveEventById,
  rejectEventById,
  deleteSpeakerById,
  deleteEventById,
  editSpeakerById
} = require("../controller/admin.controller");

router.get("/get-all-speaker", getAllSpeaker);
router.get("/get-all-event", getAllEvents);
router.get("/get-all-organizer", getAllOrganizers);
router.get("/get-all-user",auth, getAllUsers);
router.get("/get-all-payment",auth, getAllPayments);
router.get("/get-all-ticket",auth, getAllTickets);
router.get("/get-event/:id", findEventById);
router.get("/get-speakerevent/:speakerId", findEventBySpeakerId);
router.put('/approve-event/:_id',auth,approveEventById);
router.put('/reject-event/:_id',auth,rejectEventById);
router.delete('/delete-speaker/:_id', deleteSpeakerById);
router.delete('/delete-events/:_id', deleteEventById);
router.put('/edit-speaker/:_id', editSpeakerById);


module.exports = router;
