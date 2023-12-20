const express = require('express');
const cors = require('cors');
const app = express();

require("./config/db");

const speakerRoute = require("./router/speaker.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/speakers",speakerRoute)



module.exports = app;