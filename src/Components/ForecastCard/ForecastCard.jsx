import WeatherIcon from '../../utils/WeatherIcon';

export default function ForecastCard({ forecastInfo }) {

    let data = forecastInfo.weather;

    return (
        <div className="flex min-w-[100px] flex-shrink-0 flex-col items-center gap-1 rounded-2xl border border-white/15 bg-black/50 p-3 text-center shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/60 sm:min-w-0 sm:p-4">

            <p className="text-xs font-medium text-white/75 sm:text-sm">
                {forecastInfo.date}
            </p>

            <WeatherIcon
                code={data.weather[0].icon}
                className="h-11 w-11 sm:h-12 sm:w-12"
            />

            <p className="text-sm font-semibold text-white sm:text-base">
                {Math.round(data.main.temp)}°C
            </p>

            <p className="text-[10px] capitalize text-white/60 sm:text-xs">
                {data.weather[0].description}
            </p>

        </div>
    )
}   