import './App.css'
import Search from './Components/Search/Search'
import WeatherCard from './Components/WeatherCard/WeatherCard'
import { useWeather } from './hooks/useWeather'
import Alert from '@mui/material/Alert';
import ForecastCard from './Components/ForecastCard/ForecastCard';
import clearBg from "./assets/weather-bg/clear.jpg";
import cloudsBg from "./assets/weather-bg/clouds.jpg";
import rainBg from "./assets/weather-bg/rain.jpg";
import thunderBg from "./assets/weather-bg/thunderstorm.jpg";
import snowBg from "./assets/weather-bg/snow.jpg";
import fogBg from "./assets/weather-bg/fog.jpg";

function getWeatherTheme(weatherData) {
  if (!weatherData) return clearBg;

  const condition = weatherData.weather[0].main;

  if (condition === "Thunderstorm") return thunderBg;
  if (condition === "Rain" || condition === "Drizzle") return rainBg;
  if (condition === "Snow") return snowBg;
  if (condition === "Mist" || condition === "Haze" || condition === "Fog") return fogBg;
  if (condition === "Clouds") return cloudsBg;

  return clearBg;
}

function App() {
  let { getWeatherInfo, weatherData, loading, error, forecastData } = useWeather();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans">

      {/* Background photo — fixed rakha hai taaki content uske upar scroll ho (parallax feel) */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${getWeatherTheme(weatherData)})` }}
      />
      {/* Scrim — har bg photo pe text readable rakhne ke liye */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/15 to-black/60" />

      {/* Sticky glass header — title + search */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/10 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
          <div className="flex items-center gap-2 self-center sm:self-auto">
            <span className="text-xl">🌤️</span>
            <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Weather
            </h1>
          </div>
          <div className="w-full sm:w-72">
            <Search sendCity={getWeatherInfo} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-10">

        {loading && (
          <div className="flex items-center gap-2 text-white/90">
            <span className="h-2 w-2 animate-ping rounded-full bg-white/80" />
            <p className="text-sm sm:text-base">Fetching weather…</p>
          </div>
        )}

        {error && (
          <Alert
            severity="error"
            className="!w-full !max-w-sm !rounded-xl !border !border-red-300/40 !bg-red-500/15 !text-white !shadow-lg backdrop-blur-md"
          >
            {error}
          </Alert>
        )}

        {weatherData && (
          <div className="w-full animate-fade-in-up">
            <WeatherCard info={weatherData} />
          </div>
        )}

        {forecastData && (
          <section className="w-full animate-fade-in-up [animation-delay:120ms]">
            <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-white/70 sm:text-left">
              5-Day Forecast
            </h2>

            <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0 md:grid-cols-5">
              {forecastData.map((item) => (
                <ForecastCard
                  key={item.date}
                  forecastInfo={item}
                />
              ))}
            </div>
          </section>
        )}

        <footer className="mt-2 pb-4 text-center text-[11px] text-white/40 sm:text-xs">
          Weather data by OpenWeatherMap
        </footer>
      </main>
    </div>
  )
}

export default App;