import { Button } from "@material-ui/core";
import HeaderBar from "../components/HeaderBar";
import SectionHeading from "../components/SectionHeading";
import CreatePackDetails from "../components/CreatePackDetails";
import PackCreateWordCreation from "../subcontainers/PackCreateWordCreation";
import "../styles/containers/PackCreate.css";

const PackCreate = () => {
    return(
        <>
            <div className="pack-create-container">
                <HeaderBar />
                <SectionHeading headingContent="Create Vocab Pack" />
                <CreatePackDetails />
                <div className="pack-create-word-functions-container">
                    <PackCreateWordCreation />
                </div>
                <div className="pack-create-button">
                    <Button variant="contained" size="large">Create Pack</Button>
                </div>
            </div>
        </>
    );
}

export default PackCreate;