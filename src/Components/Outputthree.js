
import Typography from '@mui/material/Typography';

const Outputthree = (props) => {


    return (
        <div>
            <Typography variant="h4" gutterBottom component="div" style={{ color: "white" }}>
                1.00 {props.curr1} =
            </Typography>
            <Typography variant="h2" gutterBottom component="div" style={{ color: "white" }}>
                {props.finalResult.toFixed(5)} {props.curr2}
            </Typography>
        </div>
    )

};

export default Outputthree