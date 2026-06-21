import './App.css'
import Search from './Components/Search/Search'
import WeatherCard from './Components/WeatherCard/WeatherCard'
import {useWeather} from './hooks/useWeather'
import Alert from '@mui/material/Alert';
import ForecastCard from './Components/ForecastCard/ForecastCard';


function App() {
  let {getWeatherInfo , weatherData , loading , error, forecastData} = useWeather();

  return (
    <div className='app'>
      <Search sendCity={getWeatherInfo} />
      {loading && <h3>Loading....</h3>}
      {error && <Alert severity="error">{error}</Alert>}
      {weatherData && (<WeatherCard info={weatherData} />)}
      {forecastData && (<ForecastCard forecastInfo={forecastData}/>)}
    </div>
  )
}

export default App;
