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
} = require("../controller/admin.controller");

router.get("/get-all-speaker", getAllSpeaker);
router.get("/get-all-event", getAllEvents);
router.get("/get-all-organizer", getAllOrganizers);
router.get("/get-all-user",auth, getAllUsers);
router.get("/get-all-payment",auth, getAllPayments);
router.get("/get-all-ticket",auth, getAllTickets);
router.get("/get-event/:id", findEventById);

module.exports = router;
