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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});


ticketSchema.methods.setMaxTickets = async function () {
  const event = await mongoose.model('Event').findById(this.event);


  this.maxTickets = event.vacancy;
  await this.save(); 
};

// Method to register a user for a ticket
ticketSchema.methods.registerUser = async function (userId) {
  // Ensure maxTickets is set
  if (!this.maxTickets) {
    await this.setMaxTickets();
  }

  if (this.registeredUsers.length < this.maxTickets) {
    // Check if the user is not already registered
    if (!this.registeredUsers.includes(userId)) {
      // Add the user to the registered users list
      this.registeredUsers.push(userId);

      if (this.isPaid) {
        const payment = new mongoose.model('Payment')({
          ticket: this._id,
          amount: this.price,
        });
        await payment.save();
        this.payment = payment._id;
      }
      
      await this.save(); // Save the ticket document

      // Return a JSON response
      return {
        success: true,
        message: 'User registered successfully.',
      };
    } else {
      // User is already registered
      return {
        success: false,
        message: 'User is already registered for this ticket.',
      };
    }
  } else {
    // No available tickets
    return {
      success: false,
      message: 'No available tickets for this event.',
    };
  }
};

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
