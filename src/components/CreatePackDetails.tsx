import { TextField } from "@material-ui/core";
import LanguageDropdown from "../subcomponents/LanguageDropdown";
import "../styles/components/CreatePackDetails.css";

const CreatePackDetails = () => {
    return(
        <>
            <LanguageDropdown  />
            <div className="card-pack-details-input-container">
                <TextField variant="outlined" label="Title" className="card-pack-details-input" />
            </div>
            <div className="card-pack-details-input-container">
                <TextField variant="outlined" label="Description" className="card-pack-details-input" />
            </div>
        </>
    )

}

export default CreatePackDetails;