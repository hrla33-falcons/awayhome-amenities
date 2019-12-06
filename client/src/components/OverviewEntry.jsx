// dynamically render icons and numbers
import React from 'react';

const OverviewEntry = ({ listing }) => {
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