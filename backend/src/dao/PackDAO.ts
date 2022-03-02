import DAO from "./DAO";
import Pack from "../utils/Pack";
import DAOResponse from "../utils/DAOResponse";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";

class PackDAO extends DAO {

    private _collectionName: string
    
    constructor(){
        super();
        this._collectionName = "packs"
    }

    public async findPackById(id: number): Promise<object | null> {
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

    public createNewPack(packData: Pack): boolean {
        const query: Pack = packData;
        let successful: boolean
        try {
            this.accessDb(this._collectionName, this._client).insertOne(query);
            successful = true;
        } catch (error: any){
            console.error(error);
            successful = false;
        }
        return successful
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

    private generatePack(data: any): Pack {
        return { packId: data.id, title: data.title, dateCreated: data.dateCreated, description: data.description, languageOptions: { languageLonghand: data.languageOptions.languageLonghand, languageShorthand: data.languageOptions.languageShorthand, countryCode: data.languageOptions.countryCode } }
    }

}

export default PackDAO;