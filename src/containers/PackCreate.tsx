import { Button } from "@material-ui/core";
import HeaderBar from "../components/HeaderBar";
import SectionHeading from "../components/SectionHeading";
import CreatePackDetails from "../components/CreatePackDetails";
import WordSearchBar from "../components/WordSearchBar";
import WordCreationList from "../components/WordCreationList";

const PackCreate = () => {
    return(
        <>
            <HeaderBar />
            <SectionHeading headingContent="Create Vocab Pack" />
            <CreatePackDetails />
            <WordSearchBar />
            <WordCreationList />
            <Button variant="contained">Create Pack</Button>
        </>
    );
}

export default PackCreate;