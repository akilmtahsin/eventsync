const mongoose = require("mongoose");


const speakerSchema = new mongoose.Schema({
  id: {type: String},
  name: { type: String},
  designation: { type: String},
});

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    enum: ["seminar", "webinar"],
    required: true,
  },
  eventDetails: {
    type: String,
  },
  eventBannerUrl: {
    type: String,
   
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    required: true,
  },
  paymentAmount: {
    type: Number,
    default: 0,
  },
  eventStart: {
    type: Date,
    required: true,
  },
  eventEnd: {
    type: Date,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
  },
  
  eventVacancy: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  speakers: [speakerSchema],
  organizer: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
