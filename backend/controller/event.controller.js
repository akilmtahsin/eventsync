const Event = require("../model/event.model");
const User = require("../model/user.model")
const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventDetails,
      eventType,
      paymentStatus,
      paymentAmount,
      eventVenue,
      eventLink,
      eventVacancy,
      eventStart,
      eventEnd,
      eventBannerUrl,
      status,
      speakers, // Array of speakers
    } = req.body;

    let organizerId;

    if (req.userRole === 'organizer') {
      organizerId = req.userId;
    } else {
      res.status(403).json({ message: 'Access forbidden. User is not an organizer.' });
      return; // Exit the function if not an organizer
    }

    if (!organizerId) {
      return res.status(403).json({ message: "Not Authorized" });
    }

    const existingEvent = await Event.findOne({ eventName: eventName });
    if (existingEvent) {
      return res.status(400).json({ message: "Event already exist" });
    }

    const organizer = await User.findOne({_id: organizerId});

    defaultImageUrl= "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"

    // Create Event document with speaker references
    const createdEvent = await Event.create({
      eventName,
      eventDetails,
      eventType,
      paymentStatus,
      paymentAmount,
      eventVenue,
      eventLink,
      eventVacancy,
      eventStart,
      eventEnd,
      eventBannerUrl: eventBannerUrl || defaultImageUrl,
      organizer: organizerId,
      createdBy: organizer.username,
      status,
      speakers, 
    });

    res.status(201).json({ event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const findEventById = async (req, res) => {
  try {
    const event = await Event.find({ _id: req.params.id });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {
  createEvent,
  findEventById
};
