const express = require("express");

const {registerForEvent, viewTicketById, findEventIdByUserId} = require('../controller/ticket.controller')

const auth = require('../middleware/auth');

const router = express.Router();

router.post("/issue",auth, registerForEvent);
router.get("/view/:ticketId",auth, viewTicketById);
router.get("/view/event/",auth, findEventIdByUserId);


module.exports = router;


