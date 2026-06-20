import { useState } from 'react';
import { weatherApi } from '../services/weatherApi'

export function useWeather(){
    let [weatherData, setWeatherData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("")

  let getWeatherInfo = async (city) => {
    try {
      setLoading(true);
      setError("");

      let data = await weatherApi(city);
      setWeatherData(data);

    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    
    } finally {
      setLoading(false);
    }
  }
  return {getWeatherInfo , weatherData , loading , error};
}