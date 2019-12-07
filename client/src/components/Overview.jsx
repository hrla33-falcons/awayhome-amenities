// houses icon breakdown and tags
import React from 'react';
import OverviewEntry from './OverviewEntry.jsx';
import OverviewTags from './OverviewTags.jsx';

const Overview = (props) => {
  return (
    <div id="overview_container">
      <div>
        <OverviewEntry listing={props.currentListing} />
      </div>
      <div>
        <OverviewTags listing={props.currentListing} />
      </div>
    </div>
  )
}

export default Overview;