import HeaderBar from "../components/HeaderBar";
import PackDetails from "../components/PackDetails";
import ProgressBar from "../subcomponents/ProgressBar";
import CardList from "../components/CardList";
import CardFunctions from "../components/CardFunctions";
import "../styles/containers/PackView.css";

const PackView = () => {
    return(
        <>
            <div className="pack-view-container">
                <HeaderBar />
                <PackDetails packTitle="Test Pack" packDescription="This is a test description" packDateCreated="Sep 24 11:10AM" packFlagInfo={{countryCode: "JP", languageShorthand: "JAP"}} />
                <ProgressBar progressValue={3} totalValue={10} />
                <div className="pack-view-sticky">
                    <CardFunctions />
                </div>
                <CardList />
            </div>
        </>
    )
};

export default PackView;