import HeaderBar from "../components/HeaderBar";
import PackDetails from "../components/PackDetails";
import ProgressBar from "../subcomponents/ProgressBar";
import CardList from "../components/CardList";
import CardFunctions from "../components/CardFunctions";

const PackView = () => {
    return(
        <>
            <HeaderBar />
            <PackDetails packTitle="Test Pack" packDateCreated="Sep 24 11:10AM" packFlagInfo={{countryCode: "JP", languageShorthand: "JAP"}} />
            <ProgressBar progressValue={3} totalValue={10} />
            <CardList />
            <CardFunctions />
        </>
    )
};

export default PackView;