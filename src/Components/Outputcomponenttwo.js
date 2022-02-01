import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Outputcomponenttwo = (props) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div" style={{ color: "white" }}>
                1.00 {props.curr1} =
            </Typography>
            <Typography variant="h2" gutterBottom component="div" style={{ color: "white", marginTop: "-1rem" }}>
                {props.finalResult.toFixed(5)} {props.curr2}
            </Typography>
        </div>
    )
}

export default Outputcomponenttwo;