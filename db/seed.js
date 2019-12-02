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

const propertyHelper = ['Cabin', 'House', 'Condo/Apartment', 'Bungalow', 'Cottage', 'Studio', 'Villa', 'Resort']
const amenitiesHelper = {
  Featured: ['Pets allowed', 'Children allowed', 'Internet', 'No Smoking', 'Washer & Dryer', 'Satellite/Cable', 'Fireplace', 'Heater', 'Swimming Pool', 'Parking', 'TV', 'Hot Tub', 'Air Conditioning'],
  Safety: ['Smoke detector', 'Exterior lighting', 'Carbon-monoxide detector', 'Fire extinguisher', 'Deadbolt lock'],
  Location: ['Beach View', 'Ocean View', 'Lakefront', 'Lake View', 'Mountain View', 'Downtown'],
  General: ['Air Conditioning', 'Heating', 'Linens Provided', 'Washing Machine', 'Clothes Dryer',
    'Parking', 'Internet', 'Towels Provided', 'Iron & Board', 'Hair Dryer', 'Elevator', 'Living Room',
    'Fireplace', 'Garage', 'Telephone'],
  Kitchen: ['Dishwasher', 'Microwave', 'Stove', 'Grill', 'Coffee Maker', 'Toaster', 'Ice Maker', 'Dishes & Utensils', 'Refrigerator', 'Oven', 'Pantry Items'],
  Dining: ['Child\'s Highchair', 'Dining Area', 'Dining'],
  Entertainment: ['Television', 'Games', 'Pool Table', 'Darts', 'Satellite/Cable', 'DVD Player', 'Books', 'Toys', 'Ping Pong Table', 'Video Library'],
  Outside: ['Lawn/Garden', 'Balcony', 'Deck/Patio', 'Kayak/Canoe', 'Ski & Snowboard', 'Tennis', 'Golf', 'Bicycles', 'Water Sports Gear', 'Hiking Gear'],
  PoolSpa: ['Pool', 'Indoor Pool', 'Hot Tub']
}
const houseRulesHelper = {
  negative: ['No children', 'No pets', 'No parties/events', 'No smoking'],
  positive: ['Pets allowed', 'Children allowed']
}
const tagHelper = ['Good for families', 'Pet friendly', 'No parties/events', 'No smoking', 'Internet', 'Parking', 'Hot tub', 'TV', 'Pool', 'Instant Confirmation', 'Premier Partner']

// create one listing's amenities/overview, etc.
const createListingDetails = () => {

}

const createListings = () => {

}