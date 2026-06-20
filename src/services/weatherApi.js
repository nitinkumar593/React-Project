import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function weatherApi(city){
   try {
     let GEO_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    let geoResponse = await axios.get(GEO_URL);
    let geoData = geoResponse.data;

    if(!geoData.length){
            throw new Error("City not found");
        }

    let lat = geoData[0].lat;
    let lon = geoData[0].lon;

    let WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    let weatherRes = await axios.get(WEATHER_URL);
    let data = weatherRes.data;

    return data;
   } catch (error) {
        throw error;
   }
}