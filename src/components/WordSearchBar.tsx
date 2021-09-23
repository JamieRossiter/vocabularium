import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchLabel from "../subcomponents/SearchLabel";

const WordSearchBar = () => {
    return(
        <>
            <p>Selected Vocab</p>
            <Button variant="text">?</Button>
            <Autocomplete freeSolo options={["hi"]} renderInput={params => <TextField {...params} label={ <SearchLabel /> } />} />
        </>
    )
}

export default WordSearchBar;