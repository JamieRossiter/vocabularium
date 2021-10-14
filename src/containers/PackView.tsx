import React from "react";
import HeaderBar from "../components/HeaderBar";
import PackDetails from "../components/PackDetails";
import ProgressBar from "../subcomponents/ProgressBar";
import CardList from "../components/CardList";
import CardFunctions from "../components/CardFunctions";
import { Skeleton } from "@material-ui/lab";
import "../styles/containers/PackView.css";

type Pack = {
    id: string,
    title: string,
    dateCreated: string,
    description: string,
    languageOptions: {
        languageLonghand: string,
        languageShorthand: string,
        countryCode: string
    },
    cards: string
}

type Card = {
    untranslated: string,
    translated: string
}

const PackView = (props: { packId: string }) => {

    const [packData, updatePackData] = React.useState<Pack>();
    const [cardsData, updateCardsData] = React.useState<Array<Card>>();
    
    // Fetch pack data
    React.useEffect(() => {
        setTimeout(() => {
            fetch("/dummyData/dummy_pack.json", { method: "GET" })
            .then(response => response.json())
            .then(data => updatePackData(data));
        }, 3000)
    }, [])

    // Fetch cards data
    React.useEffect(() => {
        fetch("/dummyData/dummy_cards.json", { method: "GET" })
        .then(response => response.json())
        .then(data => updateCardsData(data));
    }, [])


    return(
        <>
            <div className="pack-view-container">
                <HeaderBar />
                <PackDetails packTitle={packData?.title} packDescription={packData?.description} packDateCreated={packData?.dateCreated} packFlagInfo={packData?.languageOptions} />
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