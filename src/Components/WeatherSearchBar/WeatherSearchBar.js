import React from 'react';
import './WeatherSearchBar.css';

const apiKey = "55fe5bd473ee901c99c9ce28fe810b9b";

class WeatherSearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      showTempInfo: false
    }

    this.toggleShowTempInfo = this.toggleShowTempInfo.bind(this);
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  toggleShowTempInfo() {
    this.setState({
      showTempInfo: !this.showTempInfo
    })
  }

  render() {
    return(
      <div className="weather-search-bar-div">

      <form onSubmit={this.getWeather}>
    		<input className="weather-input" type="text" name="city" placeholder="City"/>
    		<input className="weather-input" type="text" name="country" placeholder="Country Abbrev"/>
    		<button onClick={this.toggleShowTempInfo} className="weather-submit-button">Get Weather</button>
    	</form>


        {this.state.showTempInfo ?
          <div className="temp-info">
          <p>{this.state.temperature}° F | {this.state.description} | {this.state.humidity}% humidity</p>
            <h2>{this.state.error}</h2>
          </div>
          : ''
        }

      </div>
    )
  }

}



export default WeatherSearchBar;
