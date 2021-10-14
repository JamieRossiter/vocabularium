import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../styles/components/VocabCard.css";

type VocabCardProps = {
    vocab: {
        untranslated: string,
        translated: string
    }
    language: string
}

const VocabCard = (props: VocabCardProps) => {

    const [isFlipped, updateIsFlipped] = React.useState<boolean>(false);

    function flipCard(isFlipped: boolean): void{
        updateIsFlipped(!isFlipped);
    }
    
    function capitaliseLanguage(word: string): string{
        return word.toUpperCase();
    }

    return(
        <>
            <div className="vocab-card-container">
                <Card className="vocab-card-card">
                    <CardActionArea onClick={() => {flipCard(isFlipped)}}>
                        <CardContent>
                            <h2 className="vocab-card-heading">{isFlipped ? props.vocab.untranslated : props.vocab.translated}</h2>
                            <div className="vocab-card-language-container">
                                <LanguageIcon color="disabled" />
                                <p className="vocab-card-language">{capitaliseLanguage(isFlipped ? "English" : props.language)}</p>
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