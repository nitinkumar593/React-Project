import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';

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
        <div className='SearchBox'>
            <h3>Search for the  weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleInput} />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    )
}