import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';
import './Panel.css'

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

const theme2 = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});

const Panel = (props) => {

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // const [openTwo, setOpenTwo] = React.useState(false);
    // const handleOpenTwo = () => setOpenTwo(true);
    // const handleCloseTwo = () => setOpenTwo(false);

    const resetHandler = () => {
        props.setCurr1('');
        props.setCurr2('');  
    }

    const [ratesFinal, setRatesFinal] = React.useState({})

    React.useEffect(() => {
        async function fetchMoviesJSON() {
            const response = await fetch('http://data.fixer.io/api/latest?access_key=595c3cee1b06b2faffe39a0a0b929803');
            const movies = await response.json();
            const rates = movies.rates;
            setRatesFinal(rates);
            return rates;
        }
        fetchMoviesJSON();
    }, []);

    const showData = () => {
        console.log(props.curr1)
        var a = props.curr1
        var b = props.curr2
        console.log(ratesFinal[a]);
        console.log(ratesFinal[b]);
        console.log(ratesFinal[b]/ratesFinal[a]);
        var output = ratesFinal[b]/ratesFinal[a];
        props.setFinalResult(output);
        
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="outlined" size="large" fullWidth='true' theme={theme2} onClick={showData}>CONVERT</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="outlined" size='large' fullWidth='true' theme={theme} onClick={resetHandler}>RESET</Button>
                </Grid>
                <Grid item xs={5}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Panel;