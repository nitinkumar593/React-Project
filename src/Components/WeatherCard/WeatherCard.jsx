import WeatherIcon from '../../utils/WeatherIcon';

const icons = {
    feelsLike: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
    ),
    humidity: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M12 2.69s6 6.5 6 10.5a6 6 0 1 1-12 0c0-4 6-10.5 6-10.5z" />
        </svg>
    ),
    wind: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19 13H2" />
        </svg>
    ),
    pressure: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),
};

function StatTile({ label, value, icon }) {
    return (
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/15 bg-black/40 py-3">
            <span className="text-white/70">{icon}</span>
            <span className="text-[11px] uppercase tracking-wide text-white/60">{label}</span>
            <span className="text-sm font-semibold text-white sm:text-base">{value}</span>
        </div>
    );
}

export default function WeatherCard({ info }) {

    let temp = Math.round(info.main.temp);
    let tempMax = info.main.temp_max != null ? Math.round(info.main.temp_max) : null;
    let tempMin = info.main.temp_min != null ? Math.round(info.main.temp_min) : null;
    let showHighLow = tempMax != null && tempMin != null && tempMax !== tempMin;

    let tempColor =
        temp >= 33 ? "text-orange-300" :
        temp <= 10 ? "text-cyan-200" :
        "text-white";

    let today = new Date().toLocaleDateString("en-US", {
        weekday: "long", day: "numeric", month: "short",
    });

    let sunrise = info.sys?.sunrise
        ? new Date(info.sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : null;
    let sunset = info.sys?.sunset
        ? new Date(info.sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : null;

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-black/60 p-5 shadow-2xl backdrop-blur-2xl sm:p-8">

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

            <div className="relative flex flex-col items-center text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-white/60">{today}</p>

                <h2 className="mt-1 flex items-center gap-1.5 text-2xl font-bold text-white sm:text-3xl">
                    <svg className="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {info.name}
                </h2>

                <div className="mt-2 flex items-center justify-center gap-2 sm:gap-4">
                    <WeatherIcon
                        code={info.weather[0].icon}
                        className="h-28 w-28 drop-shadow-xl sm:h-32 sm:w-32"
                    />
                    <span className={`text-6xl font-thin leading-none sm:text-7xl ${tempColor}`}>
                        {temp}°
                    </span>
                </div>

                <p className="mt-1 text-base capitalize text-white/90 sm:text-lg">
                    {info.weather[0].description}
                </p>

                {showHighLow && (
                    <p className="mt-1 text-sm text-white/70">
                        H: {tempMax}° <span className="mx-1.5">·</span> L: {tempMin}°
                    </p>
                )}

                <div className="mt-6 grid w-full grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                    <StatTile label="Feels Like" value={`${Math.round(info.main.feels_like)}°C`} icon={icons.feelsLike} />
                    <StatTile label="Humidity" value={`${info.main.humidity}%`} icon={icons.humidity} />
                    <StatTile label="Wind" value={`${info.wind?.speed ?? "-"} m/s`} icon={icons.wind} />
                    <StatTile label="Pressure" value={info.main.pressure ? `${info.main.pressure} hPa` : "-"} icon={icons.pressure} />
                </div>

                {(sunrise || sunset) && (
                    <div className="mt-4 flex w-full items-center justify-center gap-8 border-t border-white/10 pt-4 text-sm text-white/80">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] uppercase tracking-wide text-white/50">Sunrise</span>
                            <span className="font-medium">{sunrise ?? "-"}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] uppercase tracking-wide text-white/50">Sunset</span>
                            <span className="font-medium">{sunset ?? "-"}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}