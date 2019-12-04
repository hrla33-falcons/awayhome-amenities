// houses all subsections of amenities
// featured, safety features, location type, house rules, etc.
import React from 'react';
import AmenityEntry from './AmenityEntry.jsx';

const Amenities = () => {
  return (
    <div>
      <AmenityEntry />
      <AmenityEntry />
      <AmenityEntry />
      <AmenityEntry />
      <AmenityEntry />
    </div>
  )
}

export default Amenities;