import { useState } from 'react';
import { weatherApi } from '../services/weatherApi'

export function useWeather() {
    let [weatherData, setWeatherData] = useState(null);
    let [forecastData, setForecastData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("")

    function groupForecast(list) {

        let groupedData = list.reduce((result, item) => {

            let date = item.dt_txt.split(" ")[0];

            if (!result[date]) {
                result[date] = [];
            }

            result[date].push(item);

            return result;

        }, {});

        return groupedData;
    }

    function getDailyForecast(groupedData) {
        let dailyData = Object.keys(groupedData).map((date) => {

            let dayData = groupedData[date];

            let selectedData = dayData.find((item) => {
                return item.dt_txt.includes("12:00:00")
            });

            if (!selectedData) {
                selectedData = dayData[0];
            }

            return {
                date,
                weather: selectedData
            }
        });
        return dailyData;
    }

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