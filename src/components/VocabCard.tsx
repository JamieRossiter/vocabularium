import { Button, Card, CardActions, CardActionArea, CardContent } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

const VocabCard = () => {
    return(
        <>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h2>Astaga</h2>
                        <LanguageIcon color="disabled" />
                        <p>What's up?</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="text">Edit</Button>
                </CardActions>
            </Card>
        </>
    )

}

export default VocabCard;