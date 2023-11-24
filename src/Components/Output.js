import Typography from '@mui/material/Typography';
import './Output.css'; // Import a separate CSS file for styling

const Output = (props) => {
    return (
        <div className="output-container">
            <Typography variant="h4" gutterBottom component="div" className="output-text fade-in" style={{ color: "white" }}>
                1.00 {props.curr1} =
            </Typography>
            <Typography variant="h2" gutterBottom component="div" className="output-text fade-in" style={{ color: "white" }}>
                {props.finalResult.toFixed(5)} {props.curr2}
            </Typography>
        </div>
    );
};

export default Output;
