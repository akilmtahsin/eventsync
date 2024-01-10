const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  registeredUsers: [
    {
      type: String,
    },
  ],
});

// Create a compound unique index on both `event` and `registeredUsers`
ticketSchema.index({ event: 1, 'registeredUsers': 1 }, { unique: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
