// dynamically render icons and numbers
import React from 'react';

const OverviewEntry = ({ listing }) => {
  var addNight = listing.minimumStay + 1;
  return (
    <div>
      <div>{listing.property}</div>
      <div>Sleeps: {listing.sleeps}</div>
      <div>Bedrooms: {listing.bedrooms}</div>
      <div>Bathrooms: {listing.bathrooms}</div>
      <div>Half Baths: {listing.halfBaths}</div>
      <div>Min Stay: {listing.minimumStay}&#8211;{addNight} nights</div>
    </div>
  )
}

export default OverviewEntry;