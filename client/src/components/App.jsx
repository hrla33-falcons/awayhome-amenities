// should house all components
import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Amenities from './Amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allListings: [],
      currentListing: null
    }
  }

  componentDidMount() {
    axios.get('/listings')
      .then(({ data }) => {
        this.setState({
          allListings: data,
          currentListing: data[0]
        })
      });
  }

  render() {
    const loadingInfo = () => {
      if (this.state.currentListing !== null) {
        return (
          <div>
            <Overview listings={this.state.allListings} currentListing={this.state.currentListing} />
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
        <div id='navbar'>
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#reviews">Reviews</a>
          <a href="#rates_availability">Rates & Availability</a>
        </div>
        <div id="listing_data">
          {loadingInfo()}
        </div>
      </div>
    )
  }
}

export default App;