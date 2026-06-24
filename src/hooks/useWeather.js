import { useState } from 'react';
import { weatherApi } from '../services/weatherApi';
import {groupForecast, getDailyForecast} from '../utils/helperFunction';

export function useWeather() {
    let [weatherData, setWeatherData] = useState(null);
    let [forecastData, setForecastData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    let getWeatherInfo = async (city) => {
        try {
            setLoading(true);
            setError("");

            let data = await weatherApi(city);
            setWeatherData(data.current);

            let groupedForecast = groupForecast(data.forecast.list);
            let dailyForecast = getDailyForecast(groupedForecast);

            setForecastData(dailyForecast);

        } catch (err) {
            setError(err.message);
            setWeatherData(null);

        } finally {
            setLoading(false);
        }
    }
    return { getWeatherInfo, weatherData, loading, error, forecastData };
}