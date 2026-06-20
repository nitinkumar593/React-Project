import './WeatherCard.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function WeatherCard({ info }) {

     let iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;

    return (

        <div >
                <Card sx={{ minWidth: 345 , borderRadius: 4, boxShadow:5}} className='Card'>
                    <CardContent>
                        <Typography variant="h5"  sx={{ fontWeight: "bold" }}>
                            {info.name}
                        </Typography>
                        
                        <img src={iconUrl} alt="weather icon"/>

                        <Typography>
                            Temperature: {info.main.temp} °C
                        </Typography>

                        <Typography>
                            Feels Like: {info.main.feels_like} °C
                        </Typography>

                        <Typography>
                            Weather: {info.weather[0].description}
                        </Typography>

                        <Typography>
                            Humidity: {info.main.humidity} %
                        </Typography>

                    </CardContent>
                </Card>
        </div>
    )
}