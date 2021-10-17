import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ReactCardFlip from "react-card-flip";
import "../styles/components/VocabCard.css";

type VocabCardProps = {
    vocab: {
        untranslated: string,
        translated: string
    }
    language: string,
    flipOptions: {
        flipped: Function,
        forceFlipToBack: boolean,
        swapSides: boolean
    },
    editOptions: {
        isEditable: boolean,
        isEditState: Function
    }
}

type EditedVocab = {
    originalWord: string,
    editedWord: string
}

const VocabCard = (props: VocabCardProps) => {

    const [isFlipped, updateIsFlipped] = React.useState<boolean>(false);
    const [isEditState, updateIsEditState] = React.useState<boolean>(false);
    const [editedVocab, updateEditedVocab] = React.useState<Array<EditedVocab>>([]);

    React.useEffect(() => {
        if(props.flipOptions.forceFlipToBack) updateIsFlipped(false);
    }, [props.flipOptions.forceFlipToBack])

    function flipCard(isFlipped: boolean): void{
        updateIsFlipped(!isFlipped);
        props.flipOptions.flipped(!isFlipped);
    }
    
    function capitaliseLanguage(word: string): string{
        return word.toUpperCase();
    }

    function changeEditState(state: boolean): void{
        updateIsEditState(state);
        props.editOptions.isEditState(state);
    }

    function saveEditedVocab(originalWord: string, editedWord: string): void {
        const matchingWordArray = editedVocab.filter(matchingWord => {
            return matchingWord.originalWord != originalWord;
        }) // Remove an existing version of the edited word from the editedVocab array
        const evObject: EditedVocab = { originalWord: originalWord, editedWord: editedWord };
        updateEditedVocab([...matchingWordArray, evObject]);
        changeEditState(false);
    }

    function findEditedVocab(originalWord: string): string{
        const foundVocab = editedVocab.find(word => {
            return word.originalWord === originalWord;
        });
        if(foundVocab){
            return foundVocab.editedWord;
        } else {
            return originalWord;
        }
    }
    
    function Front() {

        const [editValue, updateEditValue] = React.useState<string>(findEditedVocab(props.vocab.untranslated));

        return(
            <>
                <div className="vocab-card-container">
                    <Card className={`vocab-card-card ${isFlipped ? " flipped" : ""}`}>
                        <CardActionArea onClick={() => {if(!isEditState){flipCard(isFlipped)}}}>
                            <CardContent>
                                {isEditState ? <TextField onChange={e => { updateEditValue(e.target.value) }} defaultValue={findEditedVocab(props.vocab.untranslated)} variant="outlined" className="vocab-card-heading" /> : <h2 className="vocab-card-heading">{findEditedVocab(props.vocab.untranslated)}</h2>}
                                <div className="vocab-card-language-container">
                                    <LanguageIcon color="disabled" />
                                    <p className="vocab-card-language">{capitaliseLanguage("English")}</p>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        {props.editOptions.isEditable ? 
                            <CardActions>
                                <Button onClick={() => { changeEditState(!isEditState) }} variant="text">{isEditState ? "Cancel" : "Edit"}</Button>
                                <Button onClick={e => { saveEditedVocab(props.vocab.untranslated, editValue) }} variant="text" disabled={!isEditState} className="vocab-card-save-button">Save</Button>
                            </CardActions> 
                        : null}
                    </Card>
                </div>
            </>
        )
    }

    function Back() {

        const [editValue, updateEditValue] = React.useState<string>(findEditedVocab(props.vocab.untranslated));

        return(
            <>
                <div className="vocab-card-container">
                    <Card className={`vocab-card-card ${isFlipped ? " flipped" : ""}`}>
                        <CardActionArea onClick={() => {if(!isEditState){flipCard(isFlipped)}}}>
                            <CardContent>
                                {isEditState ? <TextField onChange={e => { updateEditValue(e.target.value) }} defaultValue={findEditedVocab(props.vocab.translated)} variant="outlined" className="vocab-card-heading" /> : <h2 className="vocab-card-heading">{findEditedVocab(props.vocab.translated)}</h2>}
                                <div className="vocab-card-language-container">
                                    <LanguageIcon color="disabled" />
                                    <p className="vocab-card-language">{capitaliseLanguage(props.language)}</p>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        {props.editOptions.isEditable ? 
                            <CardActions>
                                <Button onClick={() => { changeEditState(!isEditState) }} variant="text">{isEditState ? "Cancel" : "Edit"}</Button>
                                <Button onClick={e => { saveEditedVocab(props.vocab.translated, editValue) }} variant="text" disabled={!isEditState} className="vocab-card-save-button">Save</Button>
                            </CardActions> 
                        : null}
                    </Card>
                </div>
            </>
        )
    }

    return(
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {props.flipOptions.swapSides ? <Back /> : <Front />}
                {props.flipOptions.swapSides ? <Front /> : <Back />}
            </ReactCardFlip>
        </>
    )

}

export default VocabCard;