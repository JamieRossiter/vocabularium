import React from "react";
import { List, ListItem } from "@material-ui/core";
import VocabCard from "../components/VocabCard";
import VocabCardButton from "../components/VocabCardButton";
import VocabCardLoading from "../components/VocabCardLoading";
import { Card } from "../CustomTypes";
import "../styles/components/CardList.css";
import FlipMove from "react-flip-move";
import FadeIn from "react-fade-in";

type CardListProps = {
    cards?: Array<Card>,
    language?: string,
    progress: Function,
    forceFlipToBack: boolean,
    swapSides: boolean
}

const CardList = (props: CardListProps) => {

    const [flipCount, updateFlipCount] = React.useState<number>(0);

    React.useEffect(() => {
        if(props.forceFlipToBack){
            updateFlipCount(0);
        }
    })
    
    React.useEffect(() => {
        props.progress(flipCount);
    }, [flipCount])

    function handleFlipCountUpdated(isFlipped: boolean): void{
        if(isFlipped){
            updateFlipCount(flipCount + 1)
        } else {
            updateFlipCount(flipCount - 1);
        }
    }

    function generateCards(cardData?: Array<Card>): Array<any>{

        let generatedCards: Array<React.ReactElement> = [];

        if(cardData){
            generatedCards = cardData.map(data => {
                return <FlipMove><ListItem key={data.translated}><div className="card-list-card-container"><VocabCard vocab={data} language={props.language ?? "UNKNOWN"} flipped={handleFlipCountUpdated} forceFlipToBack={props.forceFlipToBack} swapSides={props.swapSides} /></div></ListItem></FlipMove>;
            });
        } else {
            for(let i = 0; i < 10; i++){
                generatedCards.push(<FadeIn><ListItem><div className="card-list-card-container"><VocabCardLoading /></div></ListItem></FadeIn>);
            }
        }

        return generatedCards;

    }

    return(
        <>
            <div className="card-list-container">
                    <List>
                        {generateCards(props.cards)}
                    </List>
            </div>
        </>
    )
}

export default CardList;