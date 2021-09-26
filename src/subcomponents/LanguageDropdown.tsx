import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Flag from "react-flagpack";
import "../styles/subcomponents/LanguageDropdown.css";

const LanguageDropdown = () => {

    return(
        <>
            <div className="language-dropdown-input-container" >
                <FormControl fullWidth>
                    <InputLabel>Select Language</InputLabel>
                    <Select autoWidth value="ID">
                        <MenuItem value="ID"><Flag className="language-dropdown-lang-flag" code="ID" size="m" />Indonesian</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default LanguageDropdown;