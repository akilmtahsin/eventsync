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
    enum: ["seminar", "webinar", "conference"],
    required: true,
  },
  eventDetails: {
    type: String,
  },
  eventBannerUrl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
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
  speakers: [speakerSchema],
  organizer: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
