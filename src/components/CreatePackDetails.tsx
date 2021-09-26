import { Input, InputLabel } from "@material-ui/core";
import LanguageDropdown from "../subcomponents/LanguageDropdown";
import "../styles/components/CreatePackDetails.css";

const CreatePackDetails = () => {
    return(
        <>
            <LanguageDropdown  />
            <InputLabel className="card-pack-details-input-label" shrink={true} >Title</InputLabel>
            <Input className="card-pack-details-input" />
            <InputLabel className="card-pack-details-input-label" shrink={true} >Description</InputLabel>
            <Input className="card-pack-details-input" />
        </>
    )

}

export default CreatePackDetails;