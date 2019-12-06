// dynamically renders a type of subsection
import React from 'react';

const AmenityEntries = ({ amenities }) => {
  return (
    <div>
      {
        amenities.map((amenity, index) => {
          return (
            <div key={index}>
              {amenity}
            </div>
          )
        })
      }
    </div>
  )
}

export default AmenityEntries;