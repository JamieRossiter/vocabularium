import React from "react";
import { List, ListItem, ListItemSecondaryAction, ListItemText, Button } from "@material-ui/core";
import ButtonIcon from "../subcomponents/ButtonIcon";
import "../styles/components/WordCreationList.css";

type WordCreationListProps = {
    wordList: Array<string>
}

const WordCreationList = (props: WordCreationListProps) => {

    function createWordList(list: Array<string>): Array<any> {
        let finalList: Array<any> = [];

        list.forEach((word: string, index: number) => {
            if(index % 2 === 0){
                finalList.push(
                    <div className="word-creation-list-item-white">
                        <ListItem key={index}>
                            <ListItemSecondaryAction>
                                <Button variant="text">Edit</Button>
                                <ButtonIcon icon="delete" />
                            </ListItemSecondaryAction>
                            <ListItemText>
                                {word}
                            </ListItemText>
                        </ListItem>
                    </div>
                )
            } else {
                finalList.push(
                    <div className="word-creation-list-item-grey">
                        <ListItem key={index}>
                            <ListItemSecondaryAction>
                                <Button variant="text">Edit</Button>
                                <ButtonIcon icon="delete" />
                            </ListItemSecondaryAction>
                            <ListItemText>
                                {word}
                            </ListItemText>
                        </ListItem>
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