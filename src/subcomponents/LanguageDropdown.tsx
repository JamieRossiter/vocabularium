import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Flag from "react-flagpack";
import "../styles/subcomponents/LanguageDropdown.css";

const LanguageDropdown = () => {

    return(
        <>
            <FormControl className="language-dropdown-lang-select" fullWidth>
                <InputLabel>Select Language</InputLabel>
                <Select autoWidth value="ID">
                    <MenuItem value="ID"><Flag className="language-dropdown-lang-flag" code="ID" size="m" />Indonesian</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default LanguageDropdown;