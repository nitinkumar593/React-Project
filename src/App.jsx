import './App.css'
import Search from './Components/Search/Search'
import WeatherCard from './Components/WeatherCard/WeatherCard'
import {useWeather} from './hooks/useWeather'


function App() {
  let {getWeatherInfo , weatherData , loading , error} = useWeather();

  return (
    <div className='app'>
      <Search sendCity={getWeatherInfo} />
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {weatherData && (<WeatherCard info={weatherData} />)}
    </div>
  )
}

export default App;
