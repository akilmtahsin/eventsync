const Speaker = require("../model/speaker.model");
const User = require('../model/user.model');  

const getAllSpeaker = async (req, res) => {
  try {
    const speakers = await Speaker.find({createdBy: req.userId} );
    res.status(200).json(speakers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneSpeaker = async (req, res) => {
  try {
    const speaker = await Speaker.findOne({ _id: req.params.id });
    res.status(200).json(speaker);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createSpeaker = async (req, res) => {

  const { name, designation, details, imageUrl } = req.body;

  let organizerId;

    if (req.userRole === 'organizer') {
       organizerId = req.userId;
      
    } else {
     
      
      res.status(403).json({ message: 'Access forbidden. User is not an organizer.' });
    }

  try {
    const existingSpeaker = await Speaker.findOne({ name: name });
    if (existingSpeaker) {
      return res.status(400).json({ message: "Speaker already exist" });
    }

    const organizer = await User.findOne({_id: organizerId});

    const newSpeaker = Speaker({
      name: name,
      designation: designation,
      details: details,
      imageUrl: imageUrl.Speaker,
      createdBy: organizerId,
      organizerName: organizer.username
    });

    await newSpeaker.save();

    res.status(201).json({ message: "Successfully Created" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateSpeaker = async (req, res) => {
  try {
    const speaker = await Speaker.findOne({ _id: req.params.id });

    speaker.name = req.body.name;
    speaker.designation = req.body.designation;

    await speaker.save();

    res.status(200).json(speaker);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteSpeaker = async (req, res) => {
  try {
    const speaker = await Speaker.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Speaker is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//exporting the CRUD
module.exports = {
  getAllSpeaker,
  createSpeaker,
  getOneSpeaker,
  updateSpeaker,
  deleteSpeaker,
};
