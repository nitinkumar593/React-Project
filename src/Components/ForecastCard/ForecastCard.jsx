import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Forecast({ forecastInfo }) {

    let data = forecastInfo.weather;

    return (
        <Card className="!bg-white/10 !backdrop-blur-md !rounded-xl !shadow-md min-w-[110px] sm:min-w-0 flex-shrink-0 hover:!scale-105 transition-transform duration-300">
            <CardContent className="!flex !flex-col !items-center !text-center !p-3 sm:!p-4">

                <Typography className="!text-xs sm:!text-sm !text-white/80 !mb-1">
                    {forecastInfo.date}
                </Typography>

                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                />

                <Typography className="!font-semibold !text-white !text-sm sm:!text-base">
                    {Math.round(data.main.temp)}°C
                </Typography>

                <Typography className="!text-[10px] sm:!text-xs !text-white/70 !capitalize">
                    {data.weather[0].description}
                </Typography>

            </CardContent>
        </Card>
    )
}