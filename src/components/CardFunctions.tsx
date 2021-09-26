import { Button } from "@material-ui/core";
import "../styles/components/CardFunctions.css";

const CardFunctions = () => {
    return(
        <>
            <Button className="card-functions-button" variant="outlined">Shuffle</Button>
            <Button className="card-functions-button" variant="outlined">Flip All</Button>
            <Button className="card-functions-button" variant="outlined">Share</Button>
        </>
    )
}

export default CardFunctions;