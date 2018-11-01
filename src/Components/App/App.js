import React, { Component } from 'react';
import './App.css';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

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

        </div>
      </Router>
    )
  }
}
export default App;
