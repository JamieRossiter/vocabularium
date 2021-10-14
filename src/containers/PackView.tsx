import React from "react";
import HeaderBar from "../components/HeaderBar";
import PackDetails from "../components/PackDetails";
import ProgressBar from "../subcomponents/ProgressBar";
import CardList from "../components/CardList";
import CardFunctions from "../components/CardFunctions";
import { Card, Pack } from "../CustomTypes";
import "../styles/containers/PackView.css";

type PackViewProps = {
    packId: string
}

const PackView = (props: PackViewProps) => {

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
        setTimeout(() => {
            fetch("/dummyData/dummy_cards.json", { method: "GET" })
            .then(response => response.json())
            .then(data => updateCardsData(data.cards));
        }, 3000)
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
                <CardList cards={cardsData} language={packData?.languageOptions.languageLonghand} />
            </div>
        </>
    )
};

export default PackView;