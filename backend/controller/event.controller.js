const Event = require("../model/event.model");

const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventDetails,
      eventType,
      paymentStatus,
      paymentAmount,
      eventVenue,
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

    // Create Event document with speaker references
    const createdEvent = await Event.create({
      eventName,
      eventDetails,
      eventType,
      paymentStatus,
      paymentAmount,
      eventVenue,
      eventVacancy,
      eventStart,
      eventEnd,
      eventBannerUrl,
      organizer: organizerId,
      status,
      speakers, // Include the array of speakers
    });

    res.status(201).json({ event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createEvent,
};
