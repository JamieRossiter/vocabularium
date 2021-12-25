import React from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import SearchLabel from "../subcomponents/SearchLabel";
import "../styles/components/WordSearchBar.css";

type WordSearchBarProps = {
    addNewWord: Function
}

const autoCompleteFilterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 3,
    trim: true
})

const WordSearchBar = (props: WordSearchBarProps) => {

    const [englishWords, populateEnglishWords] = React.useState<Array<string>>([]);
    const [autocompleteOpen, setAutocompleteOpen] = React.useState<boolean>(false);
    const [autocompleteValue, updateAutocompleteValue] = React.useState<string>("");
    const [dialogStatus, updateDialogStatus] = React.useState<boolean>(false);

    // Fetch a list of English words from a text file
    React.useEffect(() => {
        fetch("/english_words.txt", { method: "GET" })
            .then(response => response.text())
            .then(data => populateEnglishWords(formatEnglishWordList(data)));
    })

    function formatEnglishWordList(words: string): Array<string>{
        return words.split(/\r?\n/);
    }

    function handleAutocompleteInputChange(value: string): void{
        updateAutocompleteValue(value);
        if(!value) setAutocompleteOpen(false);
        else setAutocompleteOpen(true);
    }

    function handleNewWord(newWord: string | unknown): void{
        props.addNewWord(newWord);
        setAutocompleteOpen(false);
    }

    return(
        <>
            <div className="word-search-bar-label">
                <h2>Selected Vocab</h2>
            </div>
            <div className="word-search-bar-more-info-button">
                <Button onClick={() => { updateDialogStatus(true) }} variant="outlined" size="small">What is this?</Button>
            </div>
            <Dialog open={dialogStatus} onClose={() => { updateDialogStatus(false) }} >
                <DialogTitle>
                    Adding Vocab
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type in and add any English vocabulary that you wish to be converted into your selected language.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <div className="word-search-bar-search-functionality">
                <div className="word-search-bar-input" >
                    <Autocomplete open={autocompleteOpen} filterOptions={autoCompleteFilterOptions} onInputChange={(e, value) => handleAutocompleteInputChange(value)} onChange={(e, value) => {handleNewWord(value)}} freeSolo options={englishWords} renderInput={params => <TextField variant="outlined" {...params} label={ <SearchLabel /> } />} />
                </div>
                <div className="word-search-bar-add-button">
                    <Button variant="outlined" onClick={() => handleNewWord(autocompleteValue)}>Add</Button>
                </div>
            </div>

        </>
    )
}

export default WordSearchBar;