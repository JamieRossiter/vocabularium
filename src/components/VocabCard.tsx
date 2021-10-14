import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ReactCardFlip from "react-card-flip";
import "../styles/components/VocabCard.css";

type VocabCardProps = {
    vocab: {
        untranslated: string,
        translated: string
    }
    language: string,
    flipped: Function
}

const VocabCard = (props: VocabCardProps) => {

    const [isFlipped, updateIsFlipped] = React.useState<boolean>(false);

    function flipCard(isFlipped: boolean): void{
        updateIsFlipped(!isFlipped);
        props.flipped(!isFlipped);
    }
    
    function capitaliseLanguage(word: string): string{
        return word.toUpperCase();
    }

    return(
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="vocab-card-container">
                    <Card className="vocab-card-card">
                        <CardActionArea onClick={() => {flipCard(isFlipped)}}>
                            <CardContent>
                                <h2 className="vocab-card-heading">{props.vocab.untranslated}</h2>
                                <div className="vocab-card-language-container">
                                    <LanguageIcon color="disabled" />
                                    <p className="vocab-card-language">{capitaliseLanguage("English")}</p>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="text">Edit</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="vocab-card-container">
                    <Card className="vocab-card-card">
                        <CardActionArea onClick={() => {flipCard(isFlipped)}}>
                            <CardContent>
                                <h2 className="vocab-card-heading">{props.vocab.translated}</h2>
                                <div className="vocab-card-language-container">
                                    <LanguageIcon color="disabled" />
                                    <p className="vocab-card-language">{capitaliseLanguage(props.language)}</p>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="text">Edit</Button>
                        </CardActions>
                    </Card>
                </div>
            </ReactCardFlip>
        </>
    )

}

export default VocabCard;