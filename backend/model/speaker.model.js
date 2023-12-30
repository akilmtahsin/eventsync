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
  rating: {
    type: Number
   
  },
  image: {
    type: String,
    default:  '' ,
    
  }
});



module.exports = mongoose.model("Speaker", speakerSchema);
