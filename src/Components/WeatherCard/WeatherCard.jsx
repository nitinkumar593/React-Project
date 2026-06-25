import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function WeatherCard({ info }) {

    let iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    let temp = Math.round(info.main.temp);

    // temp ke hisaab se number ka color (hot = orange, cold = cyan, normal = white)
    let tempColor =
        temp >= 33 ? "!text-orange-300" :
        temp <= 10 ? "!text-cyan-200" :
        "!text-white";

    return (
        <Card sx={{ minWidth: 345 }} className="!bg-white/10 !backdrop-blur-md !rounded-2xl !shadow-xl w-full max-w-sm sm:max-w-md">
            <CardContent className="!flex !flex-col !items-center !text-center !py-6 !px-4 sm:!px-6">

                <Typography variant="h5" className="!font-bold !text-white !mb-1">
                    {info.name}
                </Typography>

                <img
                    src={iconUrl}
                    alt={info.weather[0].description}
                    className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-lg my-1"
                />

                <Typography className={`!text-5xl sm:!text-6xl !font-bold ${tempColor}`}>
                    {temp}°C
                </Typography>

                <Typography className="!text-white/90 !capitalize !mb-4">
                    {info.weather[0].description}
                </Typography>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full mt-1">
                    <div className="flex flex-col items-center gap-1 bg-white/10 rounded-xl py-2">
                        <Typography className="!text-[11px] sm:!text-xs !text-white/70">Feels Like</Typography>
                        <Typography className="!text-white !font-semibold !text-sm sm:!text-base">
                            {Math.round(info.main.feels_like)}°C
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center gap-1 bg-white/10 rounded-xl py-2">
                        <Typography className="!text-[11px] sm:!text-xs !text-white/70">Humidity</Typography>
                        <Typography className="!text-white !font-semibold !text-sm sm:!text-base">
                            {info.main.humidity}%
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center gap-1 bg-white/10 rounded-xl py-2">
                        <Typography className="!text-[11px] sm:!text-xs !text-white/70">Wind</Typography>
                        <Typography className="!text-white !font-semibold !text-sm sm:!text-base">
                            {info.wind?.speed ?? "-"} m/s
                        </Typography>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}