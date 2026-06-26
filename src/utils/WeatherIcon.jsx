export default function WeatherIcon({ code = "01d", className = "h-20 w-20" }) {
    const isNight = code?.endsWith("n");
    const group = code?.slice(0, 2);

    const Sun = (
        <g>
            <circle cx="32" cy="28" r="11" fill="#FDB813" />
            <g stroke="#FDB813" strokeWidth="3" strokeLinecap="round">
                <line x1="32" y1="6" x2="32" y2="12" />
                <line x1="14.8" y1="10.8" x2="18.4" y2="15.4" />
                <line x1="49.2" y1="10.8" x2="45.6" y2="15.4" />
                <line x1="8" y1="28" x2="14" y2="28" />
                <line x1="56" y1="28" x2="50" y2="28" />
            </g>
        </g>
    );

    const Moon = (
        <path d="M38 10a16 16 0 1 0 8 29.6A18 18 0 0 1 38 10z" fill="#E2E8F0" />
    );

    const cloudPath =
        "M48 46H20a10 10 0 0 1-2-19.8A13 13 0 0 1 43 20a9.5 9.5 0 0 1 9 9.4A8.6 8.6 0 0 1 48 46z";

    const Cloud = (opacity = 1) => (
        <path d={cloudPath} fill="#EAF0F8" opacity={opacity} />
    );

    const CloudBack = (
        <path d={cloudPath} fill="#C9D4E3" transform="translate(-9,-6) scale(0.8)" />
    );

    const rainDrops = (
        <g stroke="#7FB3F2" strokeWidth="2.6" strokeLinecap="round">
            <line x1="24" y1="50" x2="21" y2="58" />
            <line x1="34" y1="50" x2="31" y2="58" />
            <line x1="44" y1="50" x2="41" y2="58" />
        </g>
    );

    const snowFlakes = (
        <g stroke="#EAF0F8" strokeWidth="2.4" strokeLinecap="round">
            <line x1="23" y1="51" x2="23" y2="57" />
            <line x1="20" y1="54" x2="26" y2="54" />
            <line x1="33" y1="51" x2="33" y2="57" />
            <line x1="30" y1="54" x2="36" y2="54" />
            <line x1="43" y1="51" x2="43" y2="57" />
            <line x1="40" y1="54" x2="46" y2="54" />
        </g>
    );

    const bolt = <path d="M34 47l-7 11h6l-3 9 11-13h-6l5-7z" fill="#FBBF24" />;

    const mistLines = (
        <g stroke="#EAF0F8" strokeWidth="3" strokeLinecap="round">
            <line x1="10" y1="24" x2="54" y2="24" />
            <line x1="14" y1="34" x2="50" y2="34" />
            <line x1="10" y1="44" x2="54" y2="44" />
            <line x1="14" y1="54" x2="50" y2="54" />
        </g>
    );

    let content;
    switch (group) {
        case "01":
            content = isNight ? Moon : Sun;
            break;
        case "02":
            content = (<>{isNight ? Moon : Sun}{Cloud()}</>);
            break;
        case "03":
            content = (<>{CloudBack}{Cloud()}</>);
            break;
        case "04":
            content = (<>{CloudBack}{Cloud(0.95)}</>);
            break;
        case "09":
            content = (<>{Cloud()}{rainDrops}</>);
            break;
        case "10":
            content = (<>{!isNight && Sun}{Cloud()}{rainDrops}</>);
            break;
        case "11":
            content = (<>{Cloud()}{bolt}</>);
            break;
        case "13":
            content = (<>{Cloud()}{snowFlakes}</>);
            break;
        case "50":
            content = mistLines;
            break;
        default:
            content = Sun;
    }

    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
            {content}
        </svg>
    );
}