import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import "./Panel.css";

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
  const resetHandler = () => {
    props.setCurr1("");
    props.setCurr2("");
    console.log(props.curr12);
  };

  const showData = () => {
    props.setCurr12(!props.curr12);
    var a = props.curr1;
    var b = props.curr2;
    var output = props.ratesFinal[b] / props.ratesFinal[a];
    props.setFinalResult(output);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        gap={2}
        direction={{ xs: "column", sm: "row" }}
      >
        <Grid
          item
          sx={{
            width: { xs: "80%", sm: "fit-content" },
            padding: 0,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            fullWidth
            theme={theme2}
            className="ButtonStyle"
            onClick={showData}
          >
            <Typography
              variant="button"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              CONVERT
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          sx={{
            width: { xs: "80%", sm: "fit-content" },
            padding: 0,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            fullWidth
            theme={theme}
            className="ButtonStyle"
            onClick={resetHandler}
          >
            <Typography
              variant="button"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              RESET
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Panel;
