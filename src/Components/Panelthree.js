import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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

    const showData = () => {
        console.log(typeof (output))
        props.setCurr12(!props.curr12)
        var a = props.curr1
        var b = props.curr2
        var output = props.ratesFinal[b] / props.ratesFinal[a];
        props.setFinalResult(output);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} />
                <Grid item xs={6} sm={1}>
                    <Button
                        variant="outlined"
                        size="large"
                        fullWidth
                        theme={theme2}
                        sx={{
                            width: '100%',
                            py: { xs: 1, sm: 2 }, // Responsive vertical padding
                            px: { xs: 2, sm: 4 }, // Responsive horizontal padding
                        }}
                        className="ButtonStyle"
                        onClick={showData}
                    >
                        <Typography variant="button" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            CONVERT
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={6} sm={1}>
                    <Button
                        variant="outlined"
                        size="large"
                        fullWidth
                        theme={theme}
                        sx={{
                            width: '100%',
                            py: { xs: 1, sm: 2 }, // Responsive vertical padding
                            px: { xs: 2, sm: 4 }, // Responsive horizontal padding
                        }}
                        className="ButtonStyle"
                        onClick={resetHandler}
                    >
                        <Typography variant="button" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            RESET
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={5} />
            </Grid>
        </div>
    )
}

export default Panelthree;
