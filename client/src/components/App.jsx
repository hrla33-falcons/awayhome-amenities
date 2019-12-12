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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/listings')
      .then(({ data }) => {
        this.setState({
          allListings: data,
          currentListing: data[0]
        })
      });
  }

  handleClick() {
    var randomListingId = () => {
      return Math.floor(Math.random() * (100)) + 1;
    }
    var id = randomListingId();
    axios.get(`http://localhost:3001/listings/${id}`)
      .then(({ data }) => {
        this.setState({
          currentListing: data[0]
        })
      })
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
        <div>
          <button onClick={this.handleClick}>Generate random listing</button>
        </div>
      </div>
    )
  }
}

export default App;