import { LinearProgress } from "@material-ui/core";
import "../styles/subcomponents/ProgressBar.css";

type ProgressBarProps = {
    progressValue: number,
    totalValue: number
}

const ProgressBar = (props: ProgressBarProps) => {

    function createPercentage(value: number, maxValue: number): number{
        return value / maxValue * 100;
    }

    return(
        <> 
            <p className="progress-bar-numerical">{props.progressValue}/{props.totalValue}</p>
            <div className="progress-bar-bar-container">
                <LinearProgress variant="determinate" value={createPercentage(props.progressValue, props.totalValue)} />
            </div>
        </>
    )
}

export default ProgressBar;