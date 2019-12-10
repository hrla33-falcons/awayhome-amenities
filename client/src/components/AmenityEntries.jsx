// dynamically renders a type of subsection
import React from 'react';
import Icon from './Icon.jsx';

const AmenityEntries = ({ amenities }) => {
  // check length of amenities arr
  // divide the arr in two
  // render one half on one column and then other half in another column
  var middleIndex = Math.ceil(amenities.length / 2);
  var colOne = amenities.slice(0, middleIndex); // includes middleIndex
  var colTwo = amenities.slice(middleIndex); // starts at the next element pass middleIndex

  if (typeof amenities[0] === 'object') {
    return (
      <div>
        <div className="column">
        {
          colOne.map((amenity, index) => {
            return (
              <div key={index} id="amenity_entry">
                <Icon icon={amenity.icon}/>
                {amenity.data}
              </div>
            )
          })
        }
        </div>
        <div className="column">
          {
            colTwo.map((amenity, index) => {
              return (
                <div key={index} id="amenity_entry">
                  <Icon icon={amenity.icon}/>
                  {amenity.data}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="column">
        {
          colOne.map((amenity, index) => {
            return (
              <div key={index} id="amenity_entry">
                {amenity}
              </div>
            )
          })
        }
        </div>
        <div className="column">
          {
            colTwo.map((amenity, index) => {
              return (
                <div key={index} id="amenity_entry">
                  {amenity}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default AmenityEntries;