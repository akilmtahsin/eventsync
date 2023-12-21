const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  // Add other payment-related fields as needed
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
