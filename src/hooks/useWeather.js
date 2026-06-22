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

        if(!result[date]){
            result[date] = [];
        }

        result[date].push(item);

        return result;

    }, {});

    return groupedData;
}

    let getWeatherInfo = async (city) => {
        try {
            setLoading(true);
            setError("");

            let data = await weatherApi(city);
            setWeatherData(data.current);
           
            let groupedForcast = groupForecast(data.forecast.list);
            console.log(groupedForcast);
            
            setForecastData(groupedForcast);

        } catch (err) {
            setError(err.message);
            setWeatherData(null);

        } finally {
            setLoading(false);
        }
    }
    return { getWeatherInfo, weatherData, loading, error, forecastData };
}