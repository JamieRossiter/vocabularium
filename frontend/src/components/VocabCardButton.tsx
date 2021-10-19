import { Card, CardActionArea, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "../styles/components/VocabCard.css";

const VocabCardButton = () => {
    return(
        <>
            <div className="vocab-card-container card-button">
                <Card className="vocab-card-card card-button">
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