import React from 'react';
import TagEntry from './TagEntry.jsx';

const OverviewTags = ({ listing }) => {
  return (
    <div>
      {
        listing.tags.map((tag, index) => {
          console.log('tag', tag);
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