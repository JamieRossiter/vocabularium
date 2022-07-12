import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Flag from "react-flagpack";
import "../styles/subcomponents/LanguageDropdown.css";
import LanguageMap from "../utils/LanguageMap";

type LanguageDropdownProps = {
    handleLanguageSelection: Function
}

type LanguageOptions = {
    languageLonghand: string,
    languageShorthand: string,
    countryCode: string
}

const LanguageDropdown = (props: LanguageDropdownProps) => {

    const [selectedLanguageValue, updateSelectedLanguageValue] = React.useState("");

    // Handle selected language change
    function handleSelectedLanguageChange(selectedLanguage: string){
        const langOps: LanguageOptions = getDetailsBasedOnCountryCode(selectedLanguage);
        props.handleLanguageSelection(JSON.stringify(langOps)); // Send selected language back to parent component
        updateSelectedLanguageValue(selectedLanguage); // Update the currently selected language
    }

    function getDetailsBasedOnCountryCode(countryCode: string) : LanguageOptions{
        return {
            languageLonghand: LanguageMap[countryCode].lh, 
            languageShorthand: LanguageMap[countryCode].sh, 
            countryCode: countryCode
        };
    }

    return(
        <>
            <div className="language-dropdown-input-container" >
                <FormControl fullWidth>
                    <Select variant="outlined" autoWidth value={selectedLanguageValue} onChange={(e) => { handleSelectedLanguageChange(e.target.value as string) }}>
                        <MenuItem value="ID"><Flag className="language-dropdown-lang-flag" code="ID" size="m" />Indonesian</MenuItem>
                        <MenuItem value="IT"><Flag className="language-dropdown-lang-flag" code="IT" size="m" />Italian</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default LanguageDropdown;