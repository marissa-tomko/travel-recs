import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <h1>{this.props.business.name}</h1>
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}, {this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <p className="rating">{this.props.business.rating} stars | {this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
