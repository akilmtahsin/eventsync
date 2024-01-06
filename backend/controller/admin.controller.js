const Speaker = require("../model/speaker.model");
const User = require("../model/user.model");
const Event = require('../model/event.model');


const getAllSpeaker = async (req, res) => {
  try {

    const speakers = await Speaker.find();
    res.status(200).json(speakers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



//exporting the CRUD
module.exports = {
  getAllSpeaker
  
};
