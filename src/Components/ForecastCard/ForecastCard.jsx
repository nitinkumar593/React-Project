import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Forecast({ forecastInfo }) {

    let data = forecastInfo.weather;

    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent>

                <Typography>
                    {forecastInfo.date}
                </Typography>

                <Typography>
                    {data.main.temp} °C
                </Typography>

                <Typography>
                    {data.weather[0].description}
                </Typography>

            </CardContent>
        </Card>
    )
}