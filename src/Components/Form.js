import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Autocomplete from "@mui/material/Autocomplete";

const CustomTextfield = styled(TextField)({
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormHelperText-root": {
    color: "white",
  },
  "& .MuiAutocomplete-clearIndicator": {
    color: "white",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "white", // ✅ This controls the dropdown arrow color
  },
});

const Form = (props) => {
  const arr = [];
  Object.keys(props.ratesFinal).forEach((data) => {
    arr.push({
      value: data,
      label: data,
    });
  });

  const sortedByKeyDescending = arr.sort((a, b) => {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
    return 0;
  });

  const [cross1, setCross1] = useState(false);
  const handleCross1Click = (val) => {
    setCross1(val);
  };

  const [cross2, setCross2] = useState(false);
  const handleCross2Click = (val) => {
    setCross2(val);
  };

  return (
    <div id="parentDiv">
      <Box id="outerBox" sm={{ flexGrow: 1 }} style={{ marginTop: "5rem" }}>
        <Grid
          id="innerGrid1"
          container
          spacing={2}
          style={{ width: "100%", margin: 0 }}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: { xs: "column", sm: "flex" },
              justifyContent: "right",
              padding: "1rem",
            }}
          >
            <Autocomplete
              fullWidth
              options={sortedByKeyDescending}
              getOptionLabel={(option) => option.label}
              sx={{
                width: { xs: "100%", sm: "50%" },
                flexGrow: { xs: 1, sm: 0 },
              }}
              renderInput={(params) => {
                const selectedOption = sortedByKeyDescending.find(
                  (option) => option.value === props.curr1
                );
                return (
                  <CustomTextfield
                    {...params}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    label="FROM"
                    helperText={
                      !cross1 && selectedOption
                        ? selectedOption.label
                        : "Please select a currency"
                    }
                  />
                );
              }}
              value={(() => {
                const match = sortedByKeyDescending.find(
                  (option) => option.value === props.curr1
                );
                return match || null;
              })()}
              onChange={(event, newValue) => {
                if (newValue) {
                  handleCross1Click(false);
                  props.setCurr1(newValue.value);
                  props.setFinalResult(0);
                } else {
                  handleCross1Click(true);
                  props.setCurr1("");
                }
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: { xs: "column", sm: "flex" },
              justifyContent: "left",
              padding: "1rem",
            }}
          >
            <Autocomplete
              fullWidth
              options={sortedByKeyDescending}
              getOptionLabel={(option) => option.label}
              sx={{
                width: { xs: "100%", sm: "50%" },
                flexGrow: { xs: 1, sm: 0 },
              }}
              renderInput={(params) => {
                const selectedOption = sortedByKeyDescending.find(
                  (option) => option.value === props.curr2
                );
                return (
                  <CustomTextfield
                    {...params}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    label="TO"
                    helperText={
                      !cross2 && selectedOption
                        ? selectedOption.label
                        : "Please select a currency"
                    }
                  />
                );
              }}
              value={(() => {
                const match = sortedByKeyDescending.find(
                  (option) => option.value === props.curr2
                );
                return match || null;
              })()}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.setCurr2(newValue.value);
                  props.setFinalResult(0);
                  handleCross2Click(false);
                } else {
                  handleCross2Click(true);
                  props.setCurr2("");
                }
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Form;
