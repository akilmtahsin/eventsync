const express = require('express');
const cors = require('cors');
const app = express();

require("./config/db");

const speakerRoute = require("./router/speaker.route");
const userRoute = require("./router/user.route");
const organizerRoute = require("./router/organizer.route");
const eventRoute = require("./router/event.route");
const adminRoute = require('./router/admin.route');
const ticketRoute = require('./router/ticket.route');

app.use(cors());
//for the payload size
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use("/api/speakers",speakerRoute)
app.use("/api/user",userRoute)
app.use("/api/organizers",organizerRoute)
app.use("/api/event",eventRoute)
app.use("/api/admin",adminRoute)
app.use("/api/ticket",ticketRoute)




module.exports = app;