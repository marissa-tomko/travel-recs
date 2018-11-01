import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return(
        <ul>
          <li className="logo">
            <p>ACMT Travel</p>
          </li>
          <div className="menu">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </div>
        </ul>
    )
  }
}

export default Navbar;
