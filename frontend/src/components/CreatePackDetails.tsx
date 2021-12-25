import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import LanguageDropdown from "../subcomponents/LanguageDropdown";
import "../styles/components/CreatePackDetails.css";

type CharacterCountInputs = {
    title: number,
    description: number
}

const CreatePackDetails = () => {
    
    const MAX_CHARACTERS: CharacterCountInputs = { title: 30, description: 50 }
    const [inputCharacterCount, updateInputCharacterCount] = React.useState<CharacterCountInputs>({title: 0, description: 0});

    // Input validation

    function handleInputChange(value: string, inputType: string): void {
        if(inputType === "title") updateInputCharacterCount({title: value.length, description: inputCharacterCount.description});
        else if(inputType === "description") updateInputCharacterCount({title: inputCharacterCount.title, description: value.length})
    }

    function characterCountExceeded(charCount: number, inputType: string): boolean {
        let maxCharCount: number = 0;
        if(inputType === "title") maxCharCount = MAX_CHARACTERS.title;
        else if(inputType === "description") maxCharCount = MAX_CHARACTERS.description;
        return charCount > maxCharCount;
    }

    return(
        <>
            <LanguageDropdown  />
            <div className="card-pack-details-input-container">
                <TextField error={characterCountExceeded(inputCharacterCount.title, "title")} onChange={(e) => { handleInputChange(e.target.value, "title") } } variant="outlined" label="Title" className="card-pack-details-input" InputProps={{
                    endAdornment: <InputAdornment position="end">{inputCharacterCount.title}/{MAX_CHARACTERS.title}</InputAdornment>
                }} />
            </div>
            <div className="card-pack-details-input-container">
                <TextField error={characterCountExceeded(inputCharacterCount.description, "description")} onChange={(e) => { handleInputChange(e.target.value, "description") } } variant="outlined" label="Description" className="card-pack-details-input" InputProps={{
                    endAdornment: <InputAdornment position="end">{inputCharacterCount.description}/{MAX_CHARACTERS.description}</InputAdornment>
                }} />
            </div>
        </>
    )

}

export default CreatePackDetails;