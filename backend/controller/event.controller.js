const Event = require("../model/event.model");
const Speaker = require("../model/speaker.model");


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
      eventDate,
      eventBannerUrl,
      status,
    } = req.body;

    const organizerId = req.organizerId;

    console.log(organizerId);

    if(!organizerId){
      return res.status(403).json({message: "Not Authorized"});
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
      eventDate,
      eventBannerUrl, 
      organizer: organizerId,
      status,
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
