const mongoose = require("mongoose");

const speakerSchema = mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true
  // },
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
    type: String
    
  }
});



module.exports = mongoose.model("Speaker", speakerSchema);
