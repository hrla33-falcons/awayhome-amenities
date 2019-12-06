// houses all subsections of amenities
// featured, safety features, location type, house rules, etc.
import React from 'react';
import AmenityEntry from './AmenityEntry.jsx';

const Amenities = ({ currentListing }) => {
  return (
    <div>
      <h2>Amenities</h2>
      <div>
        {
          Object.keys(currentListing.amenities).map((key, index) => {
            return (
              <h3>{key}</h3>
            )
          })
        }
      </div>
    </div>
  )
}

export default Amenities;