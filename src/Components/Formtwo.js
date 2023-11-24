import { React } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';


const CustomTextfield = styled(TextField, {})({
    input: "white",
    icon: {
        fill: "white",
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
        "MuiInputBase-colorPrimary": {
            color: "white"
        },

    },
    ".MuiInputBase-input": {
        color: "white"
    },
    ".MuiSelect-select": {
        color: "white"
    },
    ".MuiFormHelperText-root": {
        color: "white"
    },
    ".MuiSelect-icon": {
        color: "white"
    }
});


const Formtwo = (props) => {

    console.log(props.ratesFinal)

    const arr = []
    Object.keys(props.ratesFinal).forEach((data) => {

        arr.push({
            value: data,
            label: data
        })

    })

    console.log(arr)

    const sortedByKeyDescending = arr.sort((a, b) => {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    });
    console.log(sortedByKeyDescending)

    const handleChange1 = (event) => {
        props.setCurr1(event.target.value);
        props.setFinalResult(0)
    };

    const handleChange2 = (event) => {
        props.setCurr2(event.target.value);
        props.setFinalResult(0)
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: "5rem" }}>
                <Grid container spacing={2}>
                    <Grid xs={3}>
                    </Grid>
                    <Grid xs={6}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <CustomTextfield
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    label="FROM"
                                    value={props.curr1}
                                    onChange={handleChange1}
                                    helperText="Please select a currency"
                                >
                                    {sortedByKeyDescending.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextfield>
                            </Grid>
                            <Grid xs={6}>
                                <CustomTextfield
                                    style={{ marginLeft: "2rem" }}
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    label="TO"
                                    value={props.curr2}
                                    onChange={handleChange2}
                                    helperText="Please select a currency"
                                >
                                    {sortedByKeyDescending.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextfield>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={3}>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Formtwo