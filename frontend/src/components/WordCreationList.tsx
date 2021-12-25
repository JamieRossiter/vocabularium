import React from "react";
import { List, ListItem, ListItemSecondaryAction, ListItemText, Button } from "@material-ui/core";
import ButtonIcon from "../subcomponents/ButtonIcon";
import "../styles/components/WordCreationList.css";

type ListWordProps = {
    word: string,
    index: number,
    beginDelete: Function
}

type WordCreationListProps = {
    wordList: Array<string>
    handleDelete: Function
}

const ListWord = (props: ListWordProps) => {
    return (
        <>
            <ListItem key={props.index}>
                <ListItemSecondaryAction>
                    <ButtonIcon onClick={props.beginDelete} icon="delete" />
                </ListItemSecondaryAction>
                <ListItemText>
                    {props.word}
                </ListItemText>
            </ListItem>    
        </>
    )
}

const WordCreationList = (props: WordCreationListProps) => {

    function createWordList(list: Array<string>): Array<any> {
        let finalList: Array<any> = [];

        list.forEach((word: string, index: number) => {
            if(index % 2 === 0){
                finalList.push(
                    <div className="word-creation-list-item-white">
                        <ListWord word={word} index={index} beginDelete={() => {props.handleDelete(word)}} />
                    </div>
                )
            } else {
                finalList.push(
                    <div className="word-creation-list-item-grey">
                        <ListWord word={word} index={index} beginDelete={() => {props.handleDelete(word)}} />
                    </div>
                )
            }
        })

        return finalList;
    }

    return(
        <>
            <List>
                {props.wordList.length > 0 ? createWordList(props.wordList) : <p className="word-creation-list-no-words">No words added yet.</p>}
            </List>
        </>
    )
}

export default WordCreationList;