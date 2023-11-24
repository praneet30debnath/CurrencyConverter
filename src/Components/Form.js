import { React } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import Autocomplete from '@mui/material/Autocomplete';


const CustomTextfield = styled(TextField, {})({
    input: "white",
    icon: {
        fill: "white",
    },
    ".css-i4bv87-MuiSvgIcon-root": {
        color: "white"
    },
    ".css-ptiqhd-MuiSvgIcon-root": {
        color: "white"
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
        color: "red"
    }
});


const Form = (props) => {

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
          <Grid xs={3}></Grid>
          <Grid xs={6}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Autocomplete
                  fullWidth
                  options={sortedByKeyDescending}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <CustomTextfield
                      {...params}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="FROM"
                      helperText="Please select a currency"
                    />
                  )}
                  value={sortedByKeyDescending.find((option) => option.value === props.curr1) || null}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      props.setCurr1(newValue.value);
                      props.setFinalResult(0);
                    }
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <Autocomplete
                  fullWidth
                  options={sortedByKeyDescending}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <CustomTextfield
                      {...params}
                      style={{ marginLeft: "2rem" }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="TO"
                      helperText="Please select a currency"
                    />
                  )}
                  value={sortedByKeyDescending.find((option) => option.value === props.curr2) || null}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      props.setCurr2(newValue.value);
                      props.setFinalResult(0);
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={3}></Grid>
        </Grid>
      </Box>
    </div>
    )
}

export default Form