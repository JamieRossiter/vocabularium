import DAO from "./DAO";
import { Cards, Card } from "../utils/Cards";
import { InsertOneResult, UpdateResult } from "mongodb";

class CardDAO extends DAO {

    private _collectionName: string;

    constructor(){
        super();
        this._collectionName = "cards"
    }

    public async findCardsByPackId(packId: number): Promise<object | null | Error> {
        const query: { packId: number } = { packId: packId };
        const collection = await this.accessCollection(this._collectionName);
        return collection.findOne(query)
        .then((result: object | null) => {
            this._client.close();
            return result;
        })
        .catch((error: Error) => {
            this._client.close();
            return error;
        })
    }

    public async insertCardsByData(cardsData: Cards) : Promise<InsertOneResult | Error> {
        const query: Cards = cardsData;
        const collection = await this.accessCollection(this._collectionName);
        return collection.insertOne(query)
        .then((result: InsertOneResult) => {
            this._client.close();
            return result;
        })
        .catch((error: Error) => {
            this._client.close();
            return error;
        })
    }

    // Note: updating cards requires both the translated and the untranslated fields to be "updated", even if only one of them needs to be. Failure to do so will
    // result in the omitted field being removed from the record altogether. 
    
    public async editCardsByData(editData: any): Promise<UpdateResult | Error> {
        const filter: { "packId": number, "cards.cardId": number } = { "packId": parseInt(editData.packId), "cards.cardId": parseInt(editData.cards.cardId) }
        const updateQuery: { $set: any } = {
            $set: { "cards.$": editData.cards }
        }
        const collection = await this.accessCollection(this._collectionName);
        return collection.updateOne(filter, updateQuery)
        .then((result: UpdateResult) => {
            this._client.close();
            return result;
        })
        .catch((error: Error) => {
            this._client.close();
            return error;
        })
    }

    public async deleteCardsById(id: number): Promise<object | Error | null> {
        const query: { packId: number } = { packId: id };
        const collection = await this.accessCollection(this._collectionName);
        return collection.deleteOne(query)
        .then((result: object | null) => {
            this._client.close();
            return result;
        })
        .catch((error: Error) => {
            this._client.close();
            return error;
        })
    }

}

export default CardDAO;