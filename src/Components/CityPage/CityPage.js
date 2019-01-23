import React from 'react';
import './CityPage.css';

import BusinessList from '../BusinessList/BusinessList';
import YelpSearchBar from '../YelpSearchBar/YelpSearchBar';

import Yelp from '../../util/Yelp';

class CityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="city-page-div">
        <div className="city-page-header">
          {this.props.cityName}
        </div>

        <div class="row">
          <div class="column">
            <h3 className="city-column-header">EAT</h3>
            <div className="rec">
              <p className="rec-name">Restaurant Name</p>
              <p>cuisine</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Restaurant Name</p>
              <p>cuisine</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Restaurant Name</p>
              <p>cuisine</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Restaurant Name</p>
              <p>cuisine</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>
          </div>
          <div class="column">
            <h3 className="city-column-header">DRINK</h3>
            <div className="rec">
              <p className="rec-name">Bar Name</p>
              <p>bar vibe</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Bar Name</p>
              <p>bar vibe</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Bar Name</p>
              <p>bar vibe</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>
          </div>
          <div class="column">
            <h3 className="city-column-header">EXPLORE</h3>

            <div className="rec">
              <p className="rec-name">Place</p>
              <p>activity type</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Place</p>
              <p>activity type</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>

            <div className="rec">
              <p className="rec-name">Place</p>
              <p>activity type</p>
              <p>neighborhood</p>
              <p>website</p>
            </div>
          </div>
        </div>

        <div>
          <p className="city-page-text">Not finding anything you love in {this.props.cityName}? Look for something else here!</p>
        </div>
        <YelpSearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default CityPage;
