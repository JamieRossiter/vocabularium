import { List, ListItem } from "@material-ui/core";
import VocabCard from "../components/VocabCard";
import VocabCardButton from "../components/VocabCardButton";
import "../styles/components/CardList.css";

const CardList = () => {
    return(
        <>
            <div className="card-list-container">
                <List>
                    <ListItem>
                        <div className="card-list-card-container">
                            <VocabCard />
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className="card-list-card-container">
                            <VocabCard />
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className="card-list-card-container">
                            <VocabCard />
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className="card-list-card-container">
                            <VocabCard />
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className="card-list-card-container">
                            <VocabCardButton />
                        </div>
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default CardList;