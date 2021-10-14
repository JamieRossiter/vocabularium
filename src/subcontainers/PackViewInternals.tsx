import React from "react";
import ProgressBar from "../subcomponents/ProgressBar";
import CardList from "../components/CardList";
import CardFunctions from "../components/CardFunctions";
import { Card } from "../CustomTypes";
import "../styles/subcontainers/PackViewInternals.css";

type PackViewInternalsProps = {
    cardList: {
        cards?: Array<Card>,
        language?: string
    },
    progressBar: {
        totalValue?: number
    }
}

const PackViewInternals = (props: PackViewInternalsProps) => {

    const [cardsProgress, updateCardsProgress] = React.useState<number>(0);

    function handleProgressUpdate(progressValue: number){
        updateCardsProgress(progressValue);
    }

    return(
        <>
            <div className="pack-view-internals-sticky">
                <ProgressBar progressValue={cardsProgress} totalValue={props.progressBar.totalValue} />
                <CardFunctions />
            </div>
            <CardList cards={props.cardList.cards} language={props.cardList.language} progress={handleProgressUpdate} />
        </>
    )

}

export default PackViewInternals;