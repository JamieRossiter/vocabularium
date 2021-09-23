import { List, ListItem } from "@material-ui/core";
import VocabCard from "../components/VocabCard";

const CardList = () => {
    return(
        <>
            <List>
                <ListItem>
                    <VocabCard />
                </ListItem>
                <ListItem>
                    <VocabCard />
                </ListItem>
            </List>
            
        </>
    )
}

export default CardList;