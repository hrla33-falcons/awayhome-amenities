// dynamically render icons and numbers
import React from 'react';

const OverviewEntry = ({ listing }) => {
  var addNight = listing.overview['Min Stay'] + 1;
  return (
    <div id="overview_section">
      <div id="overview_entry">{listing.overview['Property Type']}</div>
      {
        Object.keys(listing.overview).map((key, index) => {
          return (
            <div id="overview_entry">{key}: {listing.overview[key]}</div>
          )
        })
      }
      {/* <div id="overview_entry">{listing.overview.propertyType}</div>
      <div id="overview_entry">Sleeps: {listing.overview.sleeps}</div>
      <div id="overview_entry">Bedrooms: {listing.overview.bedrooms}</div>
      <div id="overview_entry">Bathrooms: {listing.overview.bathrooms}</div>
      <div id="overview_entry">Half Baths: {listing.overview.halfBaths}</div>
      <div id="overview_entry">Min Stay: {listing.overview.minimumStay}&#8211;{addNight} nights</div> */}
    </div>
  )
}

export default OverviewEntry;