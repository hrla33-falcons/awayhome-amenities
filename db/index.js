const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/awayhome-overview', { useNewUrlParser: true });


let listingDetailsSchema = mongoose.Schema({
  property: String,
  sleeps: Number,
  bedrooms: Number,
  halfBaths: Number,
  minimumStay: Number,
  amenities: {
    featured: [String],
    safetyFeatures: [String],
    locationType: [String],
    general: [String],
    kitchen: [String],
    dining: [String],
    entertainment: [String],
    outside: [String],
    poolSpa: [String]
  },
  houseRules: [String],
  tags: [String],
  imageIcons: {}
})

let listingDetails = mongoose.model('listingDetails', listingDetailsSchema);

module.exports.listingDetails = listingDetails;