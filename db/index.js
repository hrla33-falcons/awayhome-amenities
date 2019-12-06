const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/awayhome-overview', { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connected successfully"));


let listingDetailsSchema = mongoose.Schema({
  overview: {
    "Property Type": String,
    "Sleeps": Number,
    "Bedrooms": Number,
    "Bathrooms": Number,
    "Half Baths": Number,
    "Min Stay": String,
  },
  amenities: {
    "Featured": [String],
    "Safety Features": [String],
    "Location Type": [String],
    "General": [String],
    "Kitchen": [String],
    "Dining": [String],
    "Entertainment": [String],
    "Outside": [String],
    "Pool/Spa": [String]
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