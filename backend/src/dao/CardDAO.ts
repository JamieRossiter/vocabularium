import DAO from "./DAO";
import { Cards, Card } from "../utils/Cards";

class CardDAO extends DAO {

    private _collectionName: string;

    constructor(){
        super();
        this._collectionName = "cards"
    }

    public async getCardsByPackId(packId: number): Promise<Cards> {
        const query: { packId: number } = { packId: packId }
        return await this.accessDb(this._collectionName, this._client).findOne(query) // Keep in mind that the connection is not awaited on the parent method. This could cause an issue.
        .then(result => {
            let cardsData: Cards
            if(!result){
                cardsData = this.generateEmptyCards();
            } else {
                cardsData = this.generateDataRichCards(result.cards, packId);
            }
            this._client.close()
            return cardsData;
        })
        .catch(error => {
            let errorData: Cards;
            console.error(error);
            this._client.close();
            errorData = this.generateEmptyCards();
            return errorData;
        })
    }

    public createNewCards(cardsData: Cards) : boolean {
        const query: Cards = cardsData;
        let successful: boolean;
        try {
            this.accessDb(this._collectionName, this._client).insertOne(query);
            successful = true;
        } catch (error) {
            console.error(error);
            successful = false;
        }
        return successful;
    }

    private generateDataRichCards(data: Array<Card>, id: number): Cards {
        return { packId: id, cards: data }
    }

    private generateEmptyCards(): Cards {
        return { packId: null, cards: null }
    }

}

export default CardDAO;