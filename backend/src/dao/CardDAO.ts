import DAO from "./DAO";

type Cards = {
    success: boolean,
    packId: string,
    cards: Array<Card>
}

type Card = {
    translated: string,
    untranslated: string
}

class CardDAO extends DAO {

    private _collectionName: string;

    constructor(){
        super();
        this._collectionName = "cards"
    }

    // TODO: Test!
    async getCards(packId: string): Promise<Cards> {
        const query: { packId: string } = { packId: packId }
        return await this.accessDb(this._collectionName, this._client).findOne(query) // Keep in mind that the connection is not awaited on the parent method. This could cause an issue.
        .then(result => {
            let cardsData: Cards
            if(!result){
                cardsData = { success: false, packId: packId, cards: new Array<Card>() };
            } else {
                cardsData = { success: true, packId: packId, cards: result.cards};
            }
            this._client.close()
            return cardsData;
        })
        .catch(error => {
            let errorData: Cards;
            console.error(error);
            this._client.close();
            errorData = { success: false, packId: packId, cards: new Array<Card>() };
            return errorData;
        })
    }

}

export default CardDAO;