import { Button } from "@material-ui/core";
import { Shuffle, FlipToBack, Share } from "@material-ui/icons"; 
import "../styles/components/CardFunctions.css";

type CardFunctionsProps = {
    functionTriggered: {
        shuffle: Function,
        flipAll: Function
    },
    disabled: boolean
}

const CardFunctions = (props: CardFunctionsProps) => {
    return(
        <>
            <div className="card-functions-container">
                <div className="card-functions-button-container">
                    <Button disabled={props.disabled} onClick={() => {props.functionTriggered.shuffle()}} className="card-functions-button" size="large" variant="outlined" startIcon={<Shuffle />}>Shuffle</Button>
                </div>
                <div className="card-functions-button-container">
                    <Button disabled={props.disabled} onClick={() => {props.functionTriggered.flipAll()}} className="card-functions-button" size="large" variant="outlined" startIcon={<FlipToBack />}>Flip All</Button>
                </div>
                <div className="card-functions-button-container">
                    <Button disabled={props.disabled} className="card-functions-button" size="large" variant="outlined" startIcon={<Share />}>Share</Button>
                </div>
            </div>
        </>
    )
}

export default CardFunctions;