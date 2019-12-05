// randomly generate 100 listing's overviews and amenities
/*
What each document will look like for one property listing:
Property: a string (‘house’, ‘apartment’, ‘cabin’, etc.)
Sleeps: num
Bedrooms: num
Bathrooms: num
Half-Baths: num
Min. Stay: (num1 - num2) + ‘nights’
Amenities: {
  An object with key-values of arrays
  Featured: [‘Children Welcome’, ‘Internet’, ‘No Smoking’, ‘Washer & Dryer’...]
  Safety Features: [‘Smoke Detector’, ‘Exterior Lighting’, ‘Carbon-Monoxide Detector’...]
  Location Type: [‘Lake View’, ‘Waterfront’...]
  General: [Heating, Linens Provided, Garage, Washing Machine, Dryer, Internet…]
  Kitchen: [‘Dishwasher’, ‘Refrigerator’, ‘Stove’...]
  Dining: [‘Dining Area’, ‘Child’s Highchair’...]
  Entertainment: [‘Television’, ‘Satellite/Cable’, ‘DVD Player’...]
  Outside: [‘Kayak/Canoe’, ‘Bicycles’, ‘Deck/Patio’...]
  Pool/Spa: [‘Communal Pool’, ‘Hot Tub’...]
  Notes: string
}
House Rules: [...array of strings] (i.e. ‘No parties/events’, ‘No smoking’, ‘Pets allowed’)
Description: a string
Tags: [...an array of tags] (i.e. ‘Good for families’, ‘Pet-Friendly’, ‘Pool’, etc.)
Image Icon: String URL (may store this in S3)
*/

const db = require('./index.js');

const propertyHelper = ['Cabin', 'House', 'Condo/Apartment', 'Bungalow', 'Cottage', 'Studio', 'Villa', 'Resort']
const amenitiesHelper = {
  featured: ['Pets allowed', 'Children allowed', 'Internet', 'No Smoking', 'Washer & Dryer', 'Satellite/Cable', 'Fireplace', 'Heater', 'Swimming Pool', 'Parking', 'TV', 'Hot Tub', 'Air Conditioning'],
  safetyFeatures: ['Smoke detector', 'Exterior lighting', 'Carbon-monoxide detector', 'Fire extinguisher', 'Deadbolt lock'],
  locationType: ['Beach View', 'Ocean View', 'Lakefront', 'Lake View', 'Mountain View', 'Downtown'],
  general: ['Air Conditioning', 'Heating', 'Linens Provided', 'Washing Machine', 'Clothes Dryer',
    'Parking', 'Internet', 'Towels Provided', 'Iron & Board', 'Hair Dryer', 'Elevator', 'Living Room',
    'Fireplace', 'Garage', 'Telephone'],
  kitchen: ['Dishwasher', 'Microwave', 'Stove', 'Grill', 'Coffee Maker', 'Toaster', 'Ice Maker', 'Dishes & Utensils', 'Refrigerator', 'Oven', 'Pantry Items'],
  dining: ['Child\'s Highchair', 'Dining Area', 'Dining'],
  entertainment: ['Television', 'Games', 'Pool Table', 'Darts', 'Satellite/Cable', 'DVD Player', 'Books', 'Toys', 'Ping Pong Table', 'Video Library'],
  outside: ['Lawn/Garden', 'Balcony', 'Deck/Patio', 'Kayak/Canoe', 'Ski & Snowboard', 'Tennis', 'Golf', 'Bicycles', 'Water Sports Gear', 'Hiking Gear'],
  poolSpa: ['Pool', 'Indoor Pool', 'Hot Tub']
}
const houseRulesHelper = {
  negative: ['No children', 'No pets', 'No parties/events', 'No smoking'],
  positive: ['Pets allowed', 'Children allowed']
}
const tagHelper = ['Good for families', 'Internet', 'Parking', 'Hot tub', 'TV', 'Pool', 'Instant Confirmation', 'Premier Partner']

// min and max inclusive
const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createAmenities = () => {
  // for each key in amenities obj,
    // add a random array of amenities for each category
  var listingAmenities = {};
  for (var key in amenitiesHelper) {
    var result = [];
    for (var i = 0; i < randomNumber(5, amenitiesHelper[key].length); i++) {
      var randomIndex = randomNumber(0, amenitiesHelper[key].length - 1);
      if (!result.includes(amenitiesHelper[key][randomIndex])) {
        result.push(amenitiesHelper[key][randomIndex]);
      }
    }
    listingAmenities[key] = result;
  }
  return listingAmenities
}

const createHouseRules = () => {
  // result house rules should be a max of 4
  // add 0 - 3 negative house rules
  // add however many left of positive house rules
  var result = [];
  // negative rules
  for (var i = 0; i < randomNumber(1, 3); i++) {
    var randomIndex = randomNumber(0, houseRulesHelper.negative.length - 1);
    if (!result.includes(houseRulesHelper.negative[randomIndex])) {
      result.push(houseRulesHelper.negative[randomIndex]);
    }
  }
  if (!result.includes('No pets')) {
    result.push('Pets allowed');
  } else if (!result.includes('No children')) {
    result.push('Children allowed');
  } else if (!result.includes('No pets') && !result.includes('No children')) {
    result.concat(['Pets allowed', 'Children allowed']);
  }

  return result;
}

// create one listing's amenities/overview, etc.
const createListingDetails = () => {
// for each of the props in the listing doc
  var listing = {};
  var tagCopy = tagHelper.slice(0);

  listing.overview = {
    propertyType: propertyHelper[randomNumber(0, propertyHelper.length - 1)],
    sleeps: randomNumber(1, 10),
    bedrooms: randomNumber(1, 5),
    bathrooms: randomNumber(1, 5),
    halfBaths: randomNumber(0, 3),
    minimumStay: randomNumber(1, 3)
  }
  // add a random amount of amenities
  listing.amenities = createAmenities();
  // add 2-3 house rules
  // accomodate for negative and positive rules
  listing.houseRules = createHouseRules();
  // add a random amount of tags
  listing.tags = listing.houseRules; // populate tags with everything in house rules first
  var count = listing.tags.length;
  while (count < randomNumber(listing.houseRules.length, 5)) {
    var randomIndex = randomNumber(0, tagCopy.length - 1);
    listing.tags.push(tagCopy[randomIndex]);
    tagCopy.splice(randomIndex, 1);
    count++;
  }

  return listing;
}

const createListings = () => {
  var allListings = [];
  // for 100 times, invoke createListingDetails and push into result arr
  for (var i = 0; i < 100; i++) {
    allListings.push(createListingDetails());
  }
  return allListings;
}

const insertListings = () => {
  var listings = createListings();
  db.listingDetails.insertMany(listings, (err, docs) => {
    if (err) {
      console.log('Can\'t insert listings', err);
    } else {
      console.log('Successfully inserted', docs);
    }
  })
}
insertListings();