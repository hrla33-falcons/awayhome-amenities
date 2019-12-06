// houses all subsections of amenities
// featured, safety features, location type, house rules, etc.
import React from 'react';
import AmenityEntries from './AmenityEntry.jsx';

const Amenities = ({ currentListing }) => {
  return (
    <div>
      <h2>Amenities</h2>
      <div id="amenities_container">
        {
          Object.keys(currentListing.amenities).map((key, index) => {
            return (
              <div id="subcat_container">
                <h4>{key}</h4>
                <AmenityEntries key={index} index={index} amenities={currentListing.amenities[key]}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Amenities;