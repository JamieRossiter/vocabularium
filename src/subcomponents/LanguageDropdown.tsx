import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Flag from "react-flagpack";

const LanguageDropdown = () => {

    return(
        <>
            <FormControl fullWidth>
                <InputLabel>Select Language</InputLabel>
                <Select autoWidth value="ID">
                    <MenuItem value="ID"><Flag code="ID" size="m" />Indonesian</MenuItem>
                    <MenuItem value="IT"><Flag code="IT" size="m" />Italian</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default LanguageDropdown;