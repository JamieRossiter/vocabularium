import { List, ListItem } from "@material-ui/core";
import VocabCard from "../components/VocabCard";
import "../styles/components/CardList.css";

const CardList = () => {
    return(
        <>
            <List>
                <ListItem>
                    <div className="card-list-card-container">
                        <VocabCard />
                    </div>
                </ListItem>
                <ListItem>
                    <VocabCard />
                </ListItem>
            </List>
            
        </>
    )
}

export default CardList;