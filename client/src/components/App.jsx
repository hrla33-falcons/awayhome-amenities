// should house all components
import React from 'react';
import Overview from './Overview.jsx';
import Amenities from './Amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id='navbar'>
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#reviews">Reviews</a>
          <a href="#rates_availability">Rates & Availability</a>
        </div>
        <Overview />
        <Amenities />
      </div>
    )
  }
}

export default App;