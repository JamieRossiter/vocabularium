import React from "react";
import HeaderBar from "../components/HeaderBar";
import PackDetails from "../components/PackDetails";
import { Card, Pack } from "../CustomTypes";
import "../styles/containers/PackView.css";
import PackViewInternals from "../subcontainers/PackViewInternals";

type PackViewProps = {
    packId: string,
    isEditable: boolean
}

const PackView = (props: PackViewProps) => {

    const [packData, updatePackData] = React.useState<Pack>();
    const [cardsData, updateCardsData] = React.useState<Array<Card>>();
    
    // Fetch pack data
    React.useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/pack?packId=${props.packId}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                updatePackData(JSON.parse(data.message))
            });
        }, 3000)
    }, [])

    // Fetch cards data
    React.useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/cards?packId=${props.packId}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.parse(data.message).cards);
                updateCardsData(JSON.parse(data.message).cards)
            });
        }, 3000)
    }, [])

    return(
        <>
            <div className="pack-view-container">
                <HeaderBar />
                <PackDetails packTitle={packData?.title} packDescription={packData?.description} packDateCreated={packData?.dateCreated} packFlagInfo={packData?.languageOptions} />
                <PackViewInternals cardList={{cards: cardsData, language: packData?.languageOptions.languageLonghand}} progressBar={{totalValue: cardsData?.length}} isEditable={props.isEditable} />
            </div>
        </>
    )
};

export default PackView;