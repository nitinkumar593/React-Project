import './App.css';
import { useState } from 'react';
import axios from "axios";
import Search from './Components/Search/Search';
import WeatherCard from './Components/WeatherCard/WeatherCard';


function App() {
  let [weatherData, setWeatherData] = useState(null);

  let API_KEY = "3779c60ce9d67a3bd9a1cfe86140b61a";

  let getWeatherInfo = async (city) => {
    let GEO_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    let geoResponse = await axios.get(GEO_URL);
    let geoData = geoResponse.data;

    let lat = geoData[0].lat;
    let lon = geoData[0].lon;

    let WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    let weatherRes = await axios.get(WEATHER_URL);
    let data = weatherRes.data;

    console.log(data);
    setWeatherData(data);
  }

  return (
    <div className='app'>
      <Search sendCity={getWeatherInfo} />
      {weatherData && (<WeatherCard info={weatherData}/>)}
    </div>
  )
}

export default App;
