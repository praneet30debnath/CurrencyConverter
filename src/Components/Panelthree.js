import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';
import './Paneltwo.css'

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

const Panelthree = (props) => {
    const resetHandler = () => {
        props.setCurr1('');
        props.setCurr2('');
        console.log(props.curr12)
    }

    const [ratesFinal, setRatesFinal] = React.useState({})

    React.useEffect(() => {
        async function fetchMoviesJSON() {
            const response = await fetch('https://api.getgeoapi.com/v2/currency/convert?api_key=c4e54d39de126ff57f2a46d0ef3a78739fee0a61');
            //const response = await fetch('http://data.fixer.io/api/latest?access_key=595c3cee1b06b2faffe39a0a0b929803');
            const movies = await response.json();
            const state = movies.rates;
            const data = state
            const a = []
            const b = []
            for (const [key, value] of Object.entries(data)) {
                a.push(key)
                b.push(parseFloat(value.rate))
            }
            let abc = {}
            a.forEach((k, i) => { abc[k] = b[i] })
            setRatesFinal(abc);
        }
        fetchMoviesJSON();
    }, []);

    const showData = () => {
        console.log(typeof (output))
        props.setCurr12(!props.curr12)
        var a = props.curr1
        var b = props.curr2
        var output = ratesFinal[b] / ratesFinal[a];
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

export default Panelthree;