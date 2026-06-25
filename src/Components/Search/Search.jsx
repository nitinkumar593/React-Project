import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search({ sendCity }) {
    let [city, setCity] = useState('');

    let handleInput = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        sendCity(city);
        setCity("");
    }

    return (
        <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6">
            <h3 className="text-white text-base sm:text-lg font-medium mb-3 text-center">
                Search for Weather
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInput}
                    className="flex-1 [&_label]:!text-white/70 [&_label.Mui-focused]:!text-white [&_.MuiOutlinedInput-root]:!text-white [&_.MuiOutlinedInput-notchedOutline]:!border-white/30 [&_.MuiOutlinedInput-root:hover_.MuiOutlinedInput-notchedOutline]:!border-white/60 [&_.Mui-focused_.MuiOutlinedInput-notchedOutline]:!border-white"
                />
                <Button
                    variant="contained"
                    type="submit"
                    className="!bg-white !text-purple-600 !font-semibold !rounded-lg !shadow-md hover:!bg-white/90 !px-6 !py-2 !normal-case transition-all"
                >
                    Search
                </Button>
            </form>
        </div>
    )
}