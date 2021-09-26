import { Card, CardActionArea, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "../styles/components/VocabCardButton.css";

const VocabCardButton = () => {
    return(
        <>
            <div className="vocab-card-button-container">
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <AddIcon fontSize="large" color="disabled" />
                            <h3>Add Card</h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default VocabCardButton;