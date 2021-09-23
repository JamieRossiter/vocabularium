import { Card, CardActionArea, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const VocabCardButton = () => {
    return(
        <>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <AddIcon fontSize="large" color="disabled" />
                        <p>Add Card</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default VocabCardButton;