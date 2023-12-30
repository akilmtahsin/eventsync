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
  eventDetails: {
    type: String,
  },
  eventBannerUrl: {
    type: String,
    default: 'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid'],
    required: true,
  },
  paymentAmount: {
    type: Number,
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
    ref: 'User',
    required: true,
    validate: {
      validator: async function (userId) {
        const user = await mongoose.model('User').findById(userId);
        return user && user.role === 'organizer';
      },
      message: 'Must be an Organizer',
    },
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
