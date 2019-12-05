import React from 'react';
import TagEntry from './TagEntry.jsx';

const OverviewTags = ({ listing }) => {
  console.log(listing);
  return (
    <div id="tag_section">
      {
        listing.tags.map((tag, index) => {
          return (
            <span>
              <TagEntry tag={tag} key={index} index={index} />
            </span>
          )
        })
      }
    </div>
  )
}

export default OverviewTags;