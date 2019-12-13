// should house all components
import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Amenities from './Amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: null
    }
    this.randomListingId = this.randomListingId.bind(this);
  }

  randomListingId() {
    return Math.floor(Math.random() * (100)) + 1;
  }

  componentDidMount() {
    var id = this.randomListingId();
    axios.get(`/listings/${id}`)
      .then(({ data }) => {
        this.setState({
          currentListing: data[0]
        })
      });
  }

  render() {
    const loadingInfo = () => {
      if (this.state.currentListing !== null) {
        return (
          <div>
            <Overview currentListing={this.state.currentListing} />
            <Amenities currentListing={this.state.currentListing} />
          </div>
        )
      } else {
        return (
          <div>Loading...</div>
        )
      }
    }
    return (
      <div>
        <div className='navbar'>
          <div className='navbar_selections'>
            <a href="#overview">Overview</a>
            <a href="#amenities">Amenities</a>
            <a href="#reviews">Reviews</a>
            {/* <a href="#rates_availability">Rates & Availability</a> */}
          </div>
        </div>
        <div id="listing_data">
          {loadingInfo()}
        </div>
      </div>
    )
  }
}

export default App;