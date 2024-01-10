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


//exporting the CRUD
module.exports = {
  getAllSpeaker,
  getAllEvents,
  getAllOrganizers,
  getAllUsers,
  getAllPayments,
  getAllTickets,
  findEventById,
};
