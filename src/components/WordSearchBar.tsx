import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchLabel from "../subcomponents/SearchLabel";
import "../styles/components/WordSearchBar.css";

const WordSearchBar = () => {
    return(
        <>
            <div className="word-search-bar-label">
                <p>Selected Vocab</p>
            </div>
            <div className="word-search-bar-more-info-button">
                <Button variant="outlined">What is this?</Button>
            </div>
            <div className="word-search-bar-input">
                <Autocomplete freeSolo options={["hi", "wassup"]} renderInput={params => <TextField {...params} label={ <SearchLabel /> } />} />
            </div>
        </>
    )
}

export default WordSearchBar;