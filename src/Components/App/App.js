import React, { Component } from 'react';
import './App.css';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

import Barcelona from '../Cities/Barcelona';
import Lisbon from '../Cities/Lisbon';
import Portland from '../Cities/Portland';
import SaltLakeCity from '../Cities/SaltLakeCity';
import SanFrancisco from '../Cities/SanFrancisco';
import Seattle from '../Cities/Seattle';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar-div">
            <ul>
                <li className="logo">ACMT Travel</li>

              <div className="menu">
                <li className="menu-item"><Link style={{"text-decoration": "none", color: "#000000"}} to="/home">Home</Link></li>
                <li className="menu-item"><Link style={{"text-decoration": "none", color: "#000000"}} to="/about">About</Link></li>
                <li className="menu-item"><Link style={{"text-decoration": "none", color: "#000000"}} to="/contact">Contact</Link></li>
              </div>
            </ul>
          </div>

          <Route path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />

          <Route path="/barcelona" component={ Barcelona } />
          <Route path="/lisbon" component={ Lisbon } />
          <Route path="/portland" component={ Portland } />
          <Route path="/saltlakecity" component={ SaltLakeCity } />
          <Route path="/sanfrancisco" component={ SanFrancisco } />
          <Route path="/seattle" component={ Seattle } />

        </div>
      </Router>
    )
  }
}
export default App;
