const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/awayhome-overview', { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connected successfully"));


let listingDetailsSchema = mongoose.Schema({
  property: String,
  sleeps: Number,
  bedrooms: Number,
  bathrooms: Number,
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

let getAllListings = () => {
  // get all listings stored in the database
  return new Promise((resolve, reject) => {
    listingDetails.find({}, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    })
  })
}

module.exports.listingDetails = listingDetails;
module.exports.getAllListings = getAllListings;