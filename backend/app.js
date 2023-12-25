const express = require('express');
const cors = require('cors');
const app = express();

require("./config/db");

const speakerRoute = require("./router/speaker.route");
const userRoute = require("./router/user.route");
const organizerRoute = require("./router/organizer.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/speakers",speakerRoute)
app.use("/api/user",userRoute)
app.use("/api/organizers",organizerRoute)



module.exports = app;