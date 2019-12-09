import React from 'react';

const HouseRules = ({ listing }) => {
  return (
    <div>
      <h4>House Rules</h4>
      <div className="check_time">
        <span><b>Check-in: </b>3:00PM</span>
        <span><b>Check-out: </b>10:00AM</span>
      </div>
      <div id="rules_container">
        <div id="rules">
          {
            listing.houseRules.rules.map((rule, index) => {
              return (
                <div className="rule" key={index}>
                  {rule}
                </div>
              )
            })
          }
          <div className="rule_note">Minimum age of primary renter: {listing.houseRules.minAge}</div>
          <div className="rule_note">Max guests: {`${listing.overview.Sleeps} (sleeps up to ${listing.overview.Sleeps} adults)`}</div>
          <div className="rule_note">Maximum occupancy day or night is {listing.overview.Sleeps}.</div>
        </div>
      </div>
    </div>
  )
}

export default HouseRules;