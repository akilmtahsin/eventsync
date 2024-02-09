const Ticket = require("../model/ticket.model");
const Event = require("../model/event.model");
const User = require("../model/user.model");



const registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    // Check if the user is a regular user (not organizer/admin)
    if (req.userRole === "user") {
      const userId = req.userId;

      // Check if the event exists
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }

      // Check if the user already has a ticket for the event
      const existingTicket = await Ticket.findOne({
        event: eventId,
        registeredUsers: userId,
      });

      if (existingTicket) {
        // User already has a ticket, update the existing ticket if needed
        // For example, you might want to update some information or just send a message
        return res
          .status(400)
          .json({
            message: "User already registered for the event",
            ticket: existingTicket._id,
          });
      }

      // Check if there is an existing ticket for the event
      const ticketForEvent = await Ticket.findOne({ event: eventId });

      if (ticketForEvent) {
        // Update the existing ticket by pushing the userId to the registeredUsers array
        ticketForEvent.registeredUsers.push(userId);
        await ticketForEvent.save();

        return res
          .status(200)
          .json({
            message: "User added to existing ticket",
            ticket: ticketForEvent,
          });
      }

      // Create a new ticket if there isn't an existing one
      const newTicket = new Ticket({
        event: eventId,
        price: event.paymentAmount, // Assuming the event has a ticket price field
        registeredUsers: [userId],
      });

      // Save the new ticket
      const savedTicket = await newTicket.save();

      return res
        .status(201)
        .json({
          message: "New ticket created and user registered for the event.",
          ticket: savedTicket._id,
        });
    } else {
      res
        .status(403)
        .json({
          message:
            "Access forbidden. Organizer/Admin are not authorized to register for events.",
        });
    }
  } catch (error) {
    console.error("Error registering for event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const viewTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Find the ticket by ID
    const ticket = await Ticket.findById(ticketId).populate("event");

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    // Fetch and populate user details for each registered user
    const populatedUsers = await Promise.all(
      ticket.registeredUsers.map(async (userId) => {
        const user = await User.findById(userId);
        return {
          _id: user._id,
          username: user.username,
          // Add more user details as needed
        };
      })
    );

    

    // You can customize the response structure based on your needs
    const ticketDetails = {
      _id: ticket._id,
      event: ticket.event._id,
      eventName: ticket.event.eventName,
      registeredUsers: populatedUsers,
      eventDate: ticket.event.eventStart,
      eventVenue: ticket.event.eventVenue,
      eventLink: ticket.event.eventLink,
      ticketPrice: ticket.price,
    };

    res.status(200).json({ ticket: ticketDetails });
  } catch (error) {
    console.error("Error viewing ticket by ID:", error);
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

const findEventIdByUserId = async (req, res) => {
  const userId = req.userId;

  try {
    const ticket = await Ticket.findOne({
      'registeredUsers': { $in: [userId] },
    });

    if (!ticket) {
      return res.status(404).json({ error: 'No tickets found for the given user' });
    }

    const eventId = ticket.event;

    res.status(200).json({ eventId });
  } catch (error) {
    res.status(500).send(error.message);
  }
};




module.exports = {
  viewTicketById,
  registerForEvent,
  findEventIdByUserId,
};
