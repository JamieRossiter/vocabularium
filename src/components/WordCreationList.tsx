import { List, ListItem, ListItemSecondaryAction, ListItemText, Button } from "@material-ui/core";
import ButtonIcon from "../subcomponents/ButtonIcon";
import "../styles/components/WordCreationList.css";

const WordCreationList = () => {
    return(
        <>
            <List>
                <div className="word-creation-list-item-white">
                    <ListItem key="hi">
                        <ListItemSecondaryAction>
                            <Button variant="text">Edit</Button>
                            <ButtonIcon icon="delete" />
                        </ListItemSecondaryAction>
                        <ListItemText>
                            Word
                        </ListItemText>
                    </ListItem>
                </div>
                <div className="word-creation-list-item-grey">
                    <ListItem key="hi">
                        <ListItemSecondaryAction>
                            <Button variant="text">Edit</Button>
                            <ButtonIcon icon="delete" />
                        </ListItemSecondaryAction>
                        <ListItemText>
                            Word
                        </ListItemText>
                    </ListItem>
                </div>
            </List>
        </>
    )
}

export default WordCreationList;