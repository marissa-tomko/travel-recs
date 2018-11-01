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
      <div>
        <div>
          {this.props.cityName}
        </div>
        <div>
          <p>Not finding anything you love in {this.props.cityName}? Look for something else here!</p>
        </div>
        <YelpSearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default CityPage;
