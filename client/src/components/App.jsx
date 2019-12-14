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

    this.amenitiesDiv = React.createRef();
    this.overviewDiv = React.createRef();
    this.reviewsDiv = React.createRef();

    this.randomListingId = this.randomListingId.bind(this);
    this.navToAmenities = this.navToAmenities.bind(this);
    this.navToOverview = this.navToOverview.bind(this);
    this.navToReviews = this.navToReviews.bind(this);
  }

  randomListingId() {
    return Math.floor(Math.random() * (100)) + 1;
  }

  navToAmenities() {
    this.amenitiesDiv.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  navToOverview() {
    this.overviewDiv.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  navToReviews() {
    this.reviewsDiv.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  componentDidMount() {
    var id = this.randomListingId();
    axios.get(`/amenities/${id}`)
      .then(({ data }) => {
        this.setState({
          // NOTE: if you're viewing this file in the proxy,
          // this state should be set to currentListing: data
          // NOT currentListing: data[0] <-- this only works when operating
          // this module independent of the proxy
          currentListing: data[0]
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    const loadingInfo = () => {
      if (this.state.currentListing !== null) {
        return (
          <div>
            <div id="overview" ref={this.overviewDiv}>
              <Overview currentListing={this.state.currentListing} />
            </div>
            <div id="amenities" ref={this.amenitiesDiv}>
              <Amenities currentListing={this.state.currentListing} />
            </div>
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
            <a onClick={this.navToOverview} name="overviewDiv">Overview</a>
            <a onClick={this.navToAmenities} name="amenitiesDiv">Amenities</a>
            <a onClick={this.navToReviews} name="reviewsDiv">Reviews</a>
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