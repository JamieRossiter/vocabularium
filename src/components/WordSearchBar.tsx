import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchLabel from "../subcomponents/SearchLabel";
import "../styles/components/WordSearchBar.css";

const WordSearchBar = () => {
    return(
        <>
            <div className="word-search-bar-label">
                <h2>Selected Vocab</h2>
            </div>
            <div className="word-search-bar-more-info-button">
                <Button variant="outlined" size="small">What is this?</Button>
            </div>
            <div className="word-search-bar-input">
                <Autocomplete freeSolo options={["hi", "wassup"]} renderInput={params => <TextField variant="outlined" {...params} label={ <SearchLabel /> } />} />
            </div>
        </>
    )
}

export default WordSearchBar;