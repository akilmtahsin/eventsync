const mongoose = require("mongoose");

const speakerSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  details: {
    type: String

  },
  totalRating: {
    type: Number,
    default: 0,
   
  },
  numberOfRatings: {
    type: Number,
    default: 0,
   
  },
  rating: {
    type: Number,
    default: 0,
   
  },
  imageUrl: {
    type: String,
    default:  'Images/dp.jpg' ,
    
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async function (userId) {
        const user = await mongoose.model('User').findById(userId);
        return user && user.role === 'organizer';
      },
      message: 'Error from Mongoose! Must be an Organizer',
    },
  },
  organizerName: {
    type: String
  }
});
   

module.exports = mongoose.model("Speaker", speakerSchema);
