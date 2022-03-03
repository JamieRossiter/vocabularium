import DAO from "./DAO";
import Pack from "../utils/Pack";
import DAOResponse from "../utils/DAOResponse";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";
import { InsertOneResult } from "mongodb";

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

    // TODO: Make asynchronous
    public editPackData(editData: any): boolean {
        const filter: { packId: number } = { packId: parseInt(editData.packId)}
        const updateQuery: { $set: any } = { 
            $set: editData
        }
        let successful: boolean;
        try {
            this.accessDb(this._collectionName, this._client).updateOne(filter, updateQuery); // TODO: Check if any documents were matched with result.matchedCount
            successful = true;
        } catch (error: any){
            console.error(error);
            successful = false;
        }
        return successful;
    }

}

export default PackDAO;