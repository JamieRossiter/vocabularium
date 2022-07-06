import DAO from "./DAO";
import Pack from "../utils/Pack";
import { InsertOneResult, UpdateResult } from "mongodb";

class PackDAO extends DAO {

    private _collectionName: string
    
    constructor(){
        super();
        this._collectionName = "packs"
    }

    public async findPackById(id: number): Promise<object | null | Error> {
        const query: { packId: number } = { packId: id };
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

    public async insertPackByData(packData: Pack): Promise<InsertOneResult | Error> {
        const query: Pack = packData;
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

    public async editPackByData(editData: any): Promise<UpdateResult | Error> {
        const filter: { packId: number } = { packId: parseInt(editData.packId)}
        const updateQuery: { $set: any } = { 
            $set: editData
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

    public async deletePackById(id: number): Promise<object | Error | null> {
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

export default PackDAO;