import { Button, Card, CardActions, CardActionArea, CardContent } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../styles/components/VocabCard.css";

const VocabCard = () => {
    return(
        <>
            <div className="vocab-card-container">
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <h2 className="vocab-card-heading">Astaga</h2>
                            <div className="vocab-card-language-container">
                                <LanguageIcon color="disabled" />
                                <p className="vocab-card-language">MALAYSIAN</p>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="text">Edit</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )

}

export default VocabCard;