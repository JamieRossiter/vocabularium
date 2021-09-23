import { List, ListItem, ListItemSecondaryAction, ListItemText, Button } from "@material-ui/core";
import ButtonIcon from "../subcomponents/ButtonIcon";

const WordCreationList = () => {
    return(
        <>
            <List>
                <ListItem key="hi">
                    <ListItemSecondaryAction>
                        <Button variant="text">Edit</Button>
                        <ButtonIcon icon="delete" />
                    </ListItemSecondaryAction>
                    <ListItemText>
                        Word
                    </ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default WordCreationList;