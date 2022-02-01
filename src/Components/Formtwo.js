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


const currObject = {
    "AED": 4.094738,
    "AFN": 114.794492,
    "ALL": 120.80368,
    "AMD": 537.667364,
    "ANG": 1.99813,
    "AOA": 589.868963,
    "ARS": 116.617746,
    "AUD": 1.59552,
    "AWG": 2.007178,
    "AZN": 1.899568,
    "BAM": 1.955566,
    "BBD": 2.247596,
    "BDT": 95.661977,
    "BGN": 1.955236,
    "BHD": 0.420043,
    "BIF": 2222.999685,
    "BMD": 1.114789,
    "BND": 1.510796,
    "BOB": 7.664265,
    "BRL": 5.983748,
    "BSD": 1.11315,
    "BTC": 0.000029264548,
    "BTN": 83.585508,
    "BWP": 13.035139,
    "BYN": 2.905108,
    "BYR": 21849.8722,
    "BZD": 2.243897,
    "CAD": 1.422862,
    "CDF": 2239.612304,
    "CHF": 1.037515,
    "CLF": 0.032614,
    "CLP": 899.908027,
    "CNY": 7.091221,
    "COP": 4411.604016,
    "CRC": 713.363628,
    "CUC": 1.114789,
    "CUP": 29.541919,
    "CVE": 110.250106,
    "CZK": 24.488624,
    "DJF": 198.173228,
    "DKK": 7.442785,
    "DOP": 64.164332,
    "DZD": 156.594845,
    "EGP": 17.53963,
    "ERN": 16.721863,
    "ETB": 55.476205,
    "EUR": 1,
    "FJD": 2.406775,
    "FKP": 0.811478,
    "GBP": 0.831591,
    "GEL": 3.394578,
    "GGP": 0.811477,
    "GHS": 7.013053,
    "GIP": 0.811477,
    "GMD": 58.976655,
    "GNF": 10074.339011,
    "GTQ": 8.557644,
    "GYD": 232.898537,
    "HKD": 8.686778,
    "HNL": 27.399299,
    "HRK": 7.531187,
    "HTG": 114.29156,
    "HUF": 358.561294,
    "IDR": 16034.461826,
    "ILS": 3.569991,
    "IMP": 0.811477,
    "INR": 83.661047,
    "IQD": 1624.720509,
    "IRR": 47127.722191,
    "ISK": 144.020073,
    "JEP": 0.811478,
    "JMD": 174.008492,
    "JOD": 0.79043,
    "JPY": 128.485096,
    "KES": 126.458316,
    "KGS": 94.533254,
    "KHR": 4526.188536,
    "KMF": 491.90125,
    "KPW": 1003.310633,
    "KRW": 1348.57231,
    "KWD": 0.337837,
    "KYD": 0.927675,
    "KZT": 484.40456,
    "LAK": 12595.698389,
    "LBP": 1683.172612,
    "LKR": 224.864322,
    "LRD": 169.727111,
    "LSL": 17.435732,
    "LTL": 3.291684,
    "LVL": 0.674325,
    "LYD": 5.128607,
    "MAD": 10.494782,
    "MDL": 19.981801,
    "MGA": 4440.510111,
    "MKD": 61.621675,
    "MMK": 1979.251314,
    "MNT": 3186.994672,
    "MOP": 8.936493,
    "MRO": 397.979623,
    "MUR": 48.083504,
    "MVR": 17.223918,
    "MWK": 909.426141,
    "MXN": 23.195466,
    "MYR": 4.671389,
    "MZN": 71.157428,
    "NAD": 17.435727,
    "NGN": 463.373781,
    "NIO": 39.467668,
    "NOK": 10.020177,
    "NPR": 133.736933,
    "NZD": 1.705484,
    "OMR": 0.429032,
    "PAB": 1.11325,
    "PEN": 4.276122,
    "PGK": 3.942567,
    "PHP": 56.976303,
    "PKR": 196.700627,
    "PLN": 4.580181,
    "PYG": 7867.637125,
    "QAR": 4.058991,
    "RON": 4.94599,
    "RSD": 117.530122,
    "RUB": 87.170181,
    "RWF": 1156.323787,
    "SAR": 4.182733,
    "SBD": 8.993935,
    "SCR": 16.056354,
    "SDG": 491.622503,
    "SEK": 10.516036,
    "SGD": 1.510582,
    "SHP": 1.535515,
    "SLL": 12786.634772,
    "SOS": 652.152175,
    "SRD": 23.349306,
    "STD": 23073.889787,
    "SVC": 9.740684,
    "SYP": 2800.350717,
    "SZL": 17.370753,
    "THB": 37.238467,
    "TJS": 12.573501,
    "TMT": 3.912911,
    "TND": 3.235161,
    "TOP": 2.528287,
    "TRY": 15.108968,
    "TTD": 7.565878,
    "TWD": 31.038009,
    "TZS": 2572.582458,
    "UAH": 31.872094,
    "UGX": 3907.272149,
    "USD": 1.114789,
    "UYU": 48.93039,
    "UZS": 12042.543117,
    "VEF": 238375664822.6875,
    "VND": 25249.979863,
    "VUV": 126.719687,
    "WST": 2.912212,
    "XAF": 655.868396,
    "XAG": 0.049605,
    "XAU": 0.000622,
    "XCD": 3.012775,
    "XDR": 0.799792,
    "XOF": 655.868396,
    "XPF": 119.620915,
    "YER": 278.976453,
    "ZAR": 17.38325,
    "ZMK": 10034.446334,
    "ZMW": 20.065289,
    "ZWL": 358.961731
}

const arr = []
Object.keys(currObject).forEach((data) => {

    arr.push({
        value: data,
        label: data
    })

})

const Formtwo = (props) => {

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
                                    {arr.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextfield>
                            </Grid>
                            <Grid xs={6}>
                                <CustomTextfield
                                    style={{marginLeft: "2rem"}}
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
                                    {arr.map((option) => (
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