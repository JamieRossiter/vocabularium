import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import VocabCard from "../components/VocabCard";
import VocabCardButton from "../components/VocabCardButton";
import VocabCardLoading from "../components/VocabCardLoading";
import { Card } from "../CustomTypes";
import "../styles/components/CardList.css";

type CardListProps = {
    cards?: Array<Card>,
    language?: string,
    progress: Function
}

const CardList = (props: CardListProps) => {

    const [flipCount, updateFlipCount] = React.useState<number>(0);

    React.useEffect(() => {
        props.progress(flipCount);
    }, [flipCount])

    function handleFlipCountUpdated(isFlipped: boolean){
        if(isFlipped) updateFlipCount(flipCount + 1);
        else updateFlipCount(flipCount - 1);
    }

    function generateCards(cardData?: Array<Card>){

        let generatedCards: Array<any> = [];

        if(cardData){
            generatedCards = cardData.map(data => {
                return <ListItem key={data.untranslated}><div className="card-list-card-container"><VocabCard vocab={data} language={props.language ?? "UNKNOWN"} flipped={handleFlipCountUpdated} /></div></ListItem>;
            });
        } else {
            for(let i = 0; i < 10; i++){
                generatedCards.push(<ListItem><div className="card-list-card-container"><VocabCardLoading /></div></ListItem>);
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