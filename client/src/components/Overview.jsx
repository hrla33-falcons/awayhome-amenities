// houses icon breakdown and tags
import React from 'react';
import OverviewEntry from './OverviewEntry.jsx';
import OverviewTags from './OverviewTags.jsx';

const Overview = () => {
  return (
    <div>
      <div>
        <OverviewEntry />
        <OverviewEntry />
        <OverviewEntry />
        <OverviewEntry />
      </div>
      <div>
        <OverviewTags />
        <OverviewTags />
        <OverviewTags />
      </div>
    </div>
  )
}

export default Overview;