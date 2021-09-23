import { Input, InputLabel } from "@material-ui/core";
import LanguageDropdown from "../subcomponents/LanguageDropdown";

const CreatePackDetails = () => {
    return(
        <>
            <LanguageDropdown  />
            <InputLabel shrink={true} >Title</InputLabel>
            <Input />
            <InputLabel shrink={true} >Description</InputLabel>
            <Input />
        </>
    )

}

export default CreatePackDetails;