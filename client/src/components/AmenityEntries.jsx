// dynamically renders a type of subsection
import React from 'react';
import AmenityColumn from './AmenityColumn.jsx';

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
<<<<<<< HEAD
        <AmenityColumn column={colOne} hasIcon={true} />
        <AmenityColumn column={colTwo} hasIcon={true} />
=======
        <div className="column">
        {
          colOne.map((amenity, index) => {
            return (
              <div key={index} className="amenity_entry">
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
                <div key={index} className="amenity_entry">
                  <Icon icon={amenity.icon}/>
                  {amenity.data}
                </div>
              )
            })
          }
        </div>
>>>>>>> master
      </div>
    )
  } else {
    return (
      <div>
<<<<<<< HEAD
        <AmenityColumn column={colOne} hasIcon={false} />
        <AmenityColumn column={colTwo} hasIcon={false} />
=======
        <div className="column">
        {
          colOne.map((amenity, index) => {
            return (
              <div key={index} className="amenity_entry">
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
                <div key={index} className="amenity_entry">
                  {amenity}
                </div>
              )
            })
          }
        </div>
>>>>>>> master
      </div>
    )
  }

}

export default AmenityEntries;