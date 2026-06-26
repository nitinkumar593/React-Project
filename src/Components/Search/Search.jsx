import { useState } from 'react';

export default function Search({ sendCity }) {
    let [city, setCity] = useState('');

    let handleInput = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        sendCity(city.trim());
        setCity("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1 pl-3 shadow-lg backdrop-blur-md transition-colors focus-within:border-white/50 focus-within:bg-white/15"
        >
            <svg
                className="h-4 w-4 flex-shrink-0 text-white/60"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
                type="text"
                value={city}
                onChange={handleInput}
                placeholder="Search city…"
                required
                aria-label="Search city"
                className="w-full min-w-0 flex-1 bg-transparent text-sm text-white placeholder-white/50 outline-none"
            />

            <button
                type="submit"
                aria-label="Search"
                className="flex-shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 transition-all hover:bg-white/90 active:scale-95 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-sm"
            >
                Search
            </button>
        </form>
    )
}