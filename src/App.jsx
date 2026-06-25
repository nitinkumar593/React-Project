import './App.css'
import Search from './Components/Search/Search'
import WeatherCard from './Components/WeatherCard/WeatherCard'
import { useWeather } from './hooks/useWeather'
import Alert from '@mui/material/Alert';
import ForecastCard from './Components/ForecastCard/ForecastCard';

// Decides background mood based on current condition + temperature
function getWeatherTheme(weatherData) {
  if (!weatherData) return "from-indigo-500 via-purple-500 to-pink-500";

  const condition = weatherData.weather[0].main;
  const temp = weatherData.main.temp;

  if (condition === "Thunderstorm") return "from-slate-800 via-indigo-900 to-slate-950";
  if (condition === "Rain" || condition === "Drizzle") return "from-slate-600 via-blue-700 to-slate-800";
  if (condition === "Snow") return "from-slate-200 via-blue-200 to-slate-400";
  if (condition === "Mist" || condition === "Haze" || condition === "Fog") return "from-gray-400 via-slate-500 to-gray-600";
  if (condition === "Clear") {
    if (temp >= 33) return "from-orange-400 via-red-500 to-pink-600"; // hot ☀️🔥
    if (temp <= 10) return "from-cyan-200 via-sky-400 to-blue-600";   // cold + clear
    return "from-sky-400 via-blue-500 to-indigo-600";                 // pleasant clear
  }
  if (condition === "Clouds") return "from-indigo-500 via-purple-500 to-pink-500";

  return "from-indigo-500 via-purple-500 to-pink-500";
}

function App() {
  let { getWeatherInfo, weatherData, loading, error, forecastData } = useWeather();

  return (
    <div className={`min-h-screen w-full flex flex-col items-center gap-5 p-4 sm:p-8 bg-gradient-to-br ${getWeatherTheme(weatherData)} transition-colors duration-700 font-sans`}>

      <h1 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-md mt-2 sm:mt-4 tracking-wide">
        Weather App
      </h1>

      <Search sendCity={getWeatherInfo} />

      {loading && (
        <h3 className="text-white/90 text-base sm:text-lg animate-pulse">Loading....</h3>
      )}

      {error && (
        <Alert severity="error" className="!rounded-xl !shadow-md w-full max-w-sm">
          {error}
        </Alert>
      )}

      {weatherData && <WeatherCard info={weatherData} />}

      {forecastData && (
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl mt-2">
          <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
            5-Day Forecast
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:overflow-visible sm:pb-0">
            {forecastData.map((item) => (
              <ForecastCard key={item.date} forecastInfo={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App;