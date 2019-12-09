// randomly generate 100 listing's overviews and amenities

const db = require('./index.js');

const propertyHelper = ['Cabin', 'House', 'Condo/Apartment', 'Bungalow', 'Cottage', 'Studio', 'Villa', 'Resort']
const amenitiesHelper = {
  "Featured": ['Pets allowed', 'Children allowed', 'Internet', 'No Smoking', 'Washer & Dryer', 'Satellite/Cable', 'Fireplace', 'Heater', 'Swimming Pool', 'Parking', 'TV', 'Hot Tub', 'Air Conditioning'],
  "Safety Features": ['Smoke detector', 'Exterior lighting', 'Carbon-monoxide detector', 'Fire extinguisher', 'Deadbolt lock'],
  "Location Type": ['Beach View', 'Ocean View', 'Lakefront', 'Lake View', 'Mountain View', 'Downtown'],
  "General": ['Air Conditioning', 'Heating', 'Linens Provided', 'Washing Machine', 'Clothes Dryer',
    'Parking', 'Internet', 'Towels Provided', 'Iron & Board', 'Hair Dryer', 'Elevator', 'Living Room',
    'Fireplace', 'Garage', 'Telephone'],
  "Kitchen": ['Dishwasher', 'Microwave', 'Stove', 'Grill', 'Coffee Maker', 'Toaster', 'Ice Maker', 'Dishes & Utensils', 'Refrigerator', 'Oven', 'Pantry Items'],
  "Dining": ['Child\'s Highchair', 'Dining Area', 'Dining'],
  "Entertainment": ['Television', 'Games', 'Pool Table', 'Darts', 'Satellite/Cable', 'DVD Player', 'Books', 'Toys', 'Ping Pong Table', 'Video Library'],
  "Outside": ['Lawn/Garden', 'Balcony', 'Deck/Patio', 'Kayak/Canoe', 'Ski & Snowboard', 'Tennis', 'Golf', 'Bicycles', 'Water Sports Gear', 'Hiking Gear'],
  "Pool/Spa": ['Pool', 'Indoor Pool', 'Hot Tub']
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
createAmenities();

const createHouseRules = () => {
  // result house rules should be a max of 4
  // add 0 - 3 negative house rules
  // add however many left of positive house rules
  var result = {};
  // negative rules
  result.rules = [];
  for (var i = 0; i < randomNumber(1, 3); i++) {
    var randomIndex = randomNumber(0, houseRulesHelper.negative.length - 1);
    if (!result.rules.includes(houseRulesHelper.negative[randomIndex])) {
      result.rules.push(houseRulesHelper.negative[randomIndex]);
    }
  }
  if (!result.rules.includes('No pets')) {
    result.rules.push('Pets allowed');
  } else if (!result.rules.includes('No children')) {
    result.rules.push('Children allowed');
  } else if (!result.rules.includes('No pets') && !result.rules.includes('No children')) {
    result.rules.concat(['Pets allowed', 'Children allowed']);
  }

  result.minAge = randomNumber(21, 30);

  return result;
}

// create one listing's amenities/overview, etc.
const createListingDetails = (listingID) => {
// for each of the props in the listing doc
  var listing = {};
  var tagCopy = tagHelper.slice(0);
  var minNights = randomNumber(1, 2);

  listing.listing_ID = listingID;
  listing.propertyType = propertyHelper[randomNumber(0, propertyHelper.length - 1)]
  listing.overview = {
    "Sleeps": randomNumber(1, 10),
    "Bedrooms": randomNumber(1, 5),
    "Bathrooms": randomNumber(1, 5),
    "Half Baths": randomNumber(0, 3),
    "Min Stay": minNights.toString() + '\u2013' + (minNights + 1).toString() + ' nights'
  }
  // add a random amount of amenities
  listing.amenities = createAmenities();
  // add 2-3 house rules
  // accomodate for negative and positive rules
  listing.houseRules = createHouseRules();
  // add a random amount of tags
  listing.tags = listing.houseRules.rules; // populate tags with everything in house rules first
  var count = listing.tags.length;
  while (count < randomNumber(listing.houseRules.length, 5)) {
    var randomIndex = randomNumber(0, tagCopy.length - 1);
    listing.tags.push(tagCopy[randomIndex]);
    tagCopy.splice(randomIndex, 1);
    count++;
  }

  console.log(listing);
  return listing;
}

const createListings = () => {
  var allListings = [];
  var listingID = 1;
  // for 100 times, invoke createListingDetails and push into result arr
  for (var i = 0; i < 100; i++) {
    allListings.push(createListingDetails(listingID));
    listingID++;
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