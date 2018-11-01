import React from 'react';
import './InfoContainer.css';

class InfoContainer extends React.Component {
  render() {
    return(
      <div className="container-text">
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}

export default InfoContainer;
