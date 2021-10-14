import { Button } from "@material-ui/core";
import { Shuffle, FlipToBack, Share } from "@material-ui/icons"; 
import "../styles/components/CardFunctions.css";

const CardFunctions = () => {
    return(
        <>
            <div className="card-functions-container">
                <div className="card-functions-button-container">
                    <Button className="card-functions-button" size="large" variant="outlined" startIcon={<Shuffle />}>Shuffle</Button>
                </div>
                <div className="card-functions-button-container">
                    <Button className="card-functions-button" size="large" variant="outlined" startIcon={<FlipToBack />}>Reset All</Button>
                </div>
                <div className="card-functions-button-container">
                    <Button className="card-functions-button" size="large" variant="outlined" startIcon={<Share />}>Share</Button>
                </div>
            </div>
        </>
    )
}

export default CardFunctions;