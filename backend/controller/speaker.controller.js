const Speaker = require("../model/speaker.model");

const getAllSpeaker = async (req, res) => {
  try {
    const speakers = await Speaker.find();
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
  try {
    const newSpeaker = Speaker({
      name: req.body.name,
      designation: req.body.designation,
    });

    await newSpeaker.save();

    res.status(201).json(newSpeaker);
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
