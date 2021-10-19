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
    },
    isEditable: boolean
}

const PackViewInternals = (props: PackViewInternalsProps) => {

    const [shuffledCards, updateShuffledCards] = React.useState<Array<Card>>([]);
    const [cardsProgress, updateCardsProgress] = React.useState<number>(0);
    const [forceFlipToBack, updateForceFlipToBack] = React.useState<boolean>(false);
    const [swapSides, updateSwapSides] = React.useState<boolean>(false);
    const [isEditState, updateIsEditState] = React.useState<boolean>(false);

    function handleProgressUpdate(progressValue: number){
        updateCardsProgress(progressValue);
    }

    function handleCardFlipAllTrigger(){
        updateSwapSides(!swapSides);
    }

    function handleCardShuffleTrigger(){
        if(props.cardList.cards){
            let shuffled = props.cardList.cards
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            updateShuffledCards(shuffled);
            updateForceFlipToBack(true);
            setTimeout(() => {
                updateForceFlipToBack(false);
            }, 300) // This is a god awful way to do this but it'll do for now 
        }
    }

    function handleEditStateChange(state: boolean){
        updateIsEditState(state);
    }

    return(
        <>
            <div className="pack-view-internals-sticky">
                <ProgressBar progressValue={cardsProgress} totalValue={props.progressBar.totalValue} />
                <CardFunctions functionTriggered={{shuffle: handleCardShuffleTrigger, flipAll: handleCardFlipAllTrigger}} disabled={isEditState} />
            </div>
            <CardList cards={shuffledCards.length > 0 ? shuffledCards : props.cardList.cards} language={props.cardList.language} progress={handleProgressUpdate} flipOptions={{forceFlipToBack: forceFlipToBack, swapSides: swapSides}} editOptions={{isEditable: props.isEditable, isEditState: handleEditStateChange}} />
        </>
    )

}

export default PackViewInternals;