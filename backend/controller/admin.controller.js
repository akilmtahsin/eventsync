const Speaker = require("../model/speaker.model");
const User = require("../model/user.model");
const Event = require('../model/event.model');
const Payment = require('../model/payment.model')
const Ticket = require('../model/ticket.model')

const getAllSpeaker = async (req, res) => {
  try {

    const speakers = await Speaker.find();
    res.status(200).json(speakers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await User.find({ role: 'organizer' });

    res.status(200).json(organizers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {

  if (req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Access forbidden. Only admins can access this.' });
  }

  try {
    const users = await User.find({ role: 'user' });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllPayments = async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Access forbidden. Only admins can access this.' });
  }
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllTickets = async (req, res) => {
  
  if (req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Access forbidden. Only admins can access this.' });
  }

  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findEventById = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.id });
   

    res.status(200).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findEventBySpeakerId = async (req, res) => {
  try {
    const events = await Event.find({
      'speakers.id': req.params.speakerId
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const approveEventById = async (req, res) => {
  const { _id } = req.params;

  try {
    // Find the event by ID and update its status to "approved"
    const updatedEvent = await Event.findByIdAndUpdate(
      _id,
      { $set: { status: 'approved' } },
      { new: true } // Returns the modified document
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const rejectEventById = async (req, res) => {
  const { _id } = req.params;

  try {
    // Find the event by ID and update its status to "approved"
    const updatedEvent = await Event.findByIdAndUpdate(
      _id,
      { $set: { status: 'rejected' } },
      { new: true } // Returns the modified document
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteEventById = async (req, res) => {
  const { _id } = req.params;

  try {
    
    const deletedEvent = await Event.findByIdAndDelete(_id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteSpeakerById = async (req, res) => {
  const { _id } = req.params;

  try {
    
    const deletedSpeaker = await Speaker.findByIdAndDelete(_id);

    if (!deletedSpeaker) {
      return res.status(404).json({ message: 'Speaker not found' });
    }

    res.status(200).json({ message: 'Speaker deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editSpeakerById = async (req, res) => {
  const { speakerId } = req.params;
  const { editedSpeakerName } = req.body; // Assuming the edited data is sent in the request body

  try {
    // Find the speaker by ID
    const speaker = await Speaker.findById(speakerId);

    if (!speaker) {
      return res.status(404).json({ message: 'Speaker not found' });
    }

    // Update the speaker's name
    speaker.name = editedSpeakerName;

    // Save the changes
    const updatedSpeaker = await speaker.save();

    res.status(200).json(updatedSpeaker);
  } catch (error) {
    res.status(500).send(error.message);
  }
};




//exporting the CRUD
module.exports = {
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
  deleteEventById,
  deleteSpeakerById,
  editSpeakerById,
};
