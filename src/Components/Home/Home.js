import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';
import CitySquare from '../CitySquare/CitySquare';
import WeatherSearchBar from '../WeatherSearchBar/WeatherSearchBar';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="main-summary container-div">
          <InfoContainer
            text="One couple's attempt at recording where they've been & what they loved."
          />
        </div>

        <div className="container-div">
          <div className="container-left text-container recommend-container">
            <InfoContainer
              text="Where we've been & what we recommend"
            />
          </div>

          <div className="container-right">
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/seattle"><CitySquare cityAbbrev="SEA"/></Link>
              </div>
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/barcelona"><CitySquare cityAbbrev="BCN"/></Link>
              </div>
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/sanfrancisco"><CitySquare cityAbbrev="SFO"/></Link>
              </div>
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/portland"><CitySquare cityAbbrev="PDX"/></Link>
              </div>
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/lisbon"><CitySquare cityAbbrev="LIS"/></Link>
              </div>
              <div className="city-square">
                <Link style={{"text-decoration": "none", color: "#FFFFFF"}} to="/saltlakecity"><CitySquare cityAbbrev="SLC"/></Link>
              </div>
          </div>
        </div>

        <div className="container-div">
          <div className="container-left weather-form-container">
            <WeatherSearchBar />
          </div>
          <div className="container-right text-container check-weather-container">
            <InfoContainer
              text="Trying to decide what to pack? Check out the weather!"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
