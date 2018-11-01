import React from 'react';
import './CitySquare.css';

class CitySquare extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.cityAbbrev}</h2>
      </div>
    )
  }
}

export default CitySquare;
