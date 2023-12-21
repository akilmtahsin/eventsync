const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    enum: ['seminar', 'webinar', 'conference'],
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  eventDate: {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  location: {
    type: String,
    required: true,
  },
  vacancy: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  speakers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Speaker', 
    },
  ],
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organizer',
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
