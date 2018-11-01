import React from 'react';
import './InfoContainer.css';

class InfoContainer extends React.Component {
  render() {
    return(
      <div>
        <p className="container-text">{this.props.text}</p>
      </div>
    )
  }
}

export default InfoContainer;
