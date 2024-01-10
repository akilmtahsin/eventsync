const express = require("express");

const {registerForEvent, viewTicketById} = require('../controller/ticket.controller')

const auth = require('../middleware/auth');

const router = express.Router();

router.post("/issue",auth, registerForEvent);
router.get("/view/:ticketId",auth, viewTicketById);


module.exports = router;
