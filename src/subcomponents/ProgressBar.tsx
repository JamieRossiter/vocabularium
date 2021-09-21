import { LinearProgress } from "@material-ui/core";

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
            <p>{props.progressValue}/{props.totalValue}</p>
            <LinearProgress variant="determinate" value={createPercentage(props.progressValue, props.totalValue)} />
        </>
    )
}

export default ProgressBar;