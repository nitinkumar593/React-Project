import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Forecast({ forecastInfo }) {
    return (
        <div>
            {console.log(forecastInfo.list.filter((item) => (item.dt_txt.includes("12:00:00"))))}

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography>

                    </Typography>
                    <Typography>

                    </Typography>
                    <Typography>

                    </Typography>
                    <Typography>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}