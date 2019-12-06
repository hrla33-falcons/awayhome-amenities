// dynamically render icons and numbers
import React from 'react';

const OverviewEntry = ({ listing }) => {
  var addNight = listing.overview['Min Stay'] + 1;
  return (
    <div id="overview_section">
      <div id="overview_entry">{listing.propertyType}</div>
      {
        Object.keys(listing.overview).map((key, index) => {
          return (
            <div id="overview_entry">{key}: {listing.overview[key]}</div>
          )
        })
      }
    </div>
  )
}

export default OverviewEntry;