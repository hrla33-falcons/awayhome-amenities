import React from 'react';

const OverviewTags = ({ listing }) => {
  return (
    <div id="tag_section">
      {
        listing.tags.map((tag, index) => {
          return (
            <span id="tag" key={index}>
              {tag}
            </span>
          )
        })
      }
    </div>
  )
}

export default OverviewTags;