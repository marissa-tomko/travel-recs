import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import YelpSearchBar from '../YelpSearchBar/YelpSearchBar';
import Navbar from '../Navbar/Navbar';
import InfoContainer from '../InfoContainer/InfoContainer';
import CitySquare from '../CitySquare/CitySquare';
import WeatherSearchBar from '../WeatherSearchBar/WeatherSearchBar';
import CityPage from '../CityPage/CityPage';



class App extends React.Component {

  render() {
    return(
      <div>
        <div className="navbar-div">
          <Navbar />
        </div>
        <div className="main-summary container-div">
          <InfoContainer
            text="One couple's attempt at recording where they've been & what they loved."
          />
        </div>

        <div className="container-div">

          <div className="container-left text-container">
            <InfoContainer
              text="Where we've been & what we recommend"
            />
          </div>

          <div className="container-right">

              <div className="city-square">
                <CitySquare cityAbbrev="SEA"/>
              </div>
              <div className="city-square">
                <CitySquare cityAbbrev="BCN"/>
              </div>
              <div className="city-square">
                <CitySquare cityAbbrev="SFO"/>
              </div>

              <div className="city-square">
                <CitySquare cityAbbrev="PDX"/>
              </div>
              <div className="city-square">
                <CitySquare cityAbbrev="LIS"/>
              </div>
              <div className="city-square">
                <CitySquare cityAbbrev="SLC"/>
              </div>

          </div>

        </div>

        <div className="container-div">

          <div className="container-left">

          </div>

          <div className="container-right text-container">
            <InfoContainer
              text="Trying to decide what to pack? Check out the weather!"
            />
          </div>
          <div className="container-right">
            <WeatherSearchBar />
          </div>

        </div>


        <CityPage cityName="Portland"/>
      </div>
    )
  }
}

export default App;
