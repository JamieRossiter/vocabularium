import DAO from "./DAO";
import Pack from "../utils/Pack";

class PackDAO extends DAO {

    private _collectionName: string
    
    constructor(){
        super();
        this._collectionName = "packs"
    }

    public async getPackById(packId: string): Promise<Pack> {
        const query: { id: string } = { id: packId };
        return await this.accessDb(this._collectionName, this._client).findOne(query) // Keep in mind that the connection is not awaited on the parent method. This could cause an issue.
        .then(result => {
            let packData: Pack;
            if(!result) {
                packData = this.generateEmptyPack(packId);
            } else {
                packData = this.generateDataRichPack(result);
            }
            this._client.close();
            return packData;
        })
        .catch(error => {
            let errorData: Pack;
            console.error(error);
            this._client.close();
            errorData = this.generateEmptyPack(packId)
            return errorData;
        })
    }

    public createNewPack(packData: Pack): boolean {
        const query: Pack = packData;
        let successful: boolean
        try {
            this.accessDb(this._collectionName, this._client).insertOne(query);
            successful = true;
        } catch (error){
            console.error(error);
            successful = false;
        }
        return successful
    }

    private generateEmptyPack(packId: string): Pack {
        return { packId: packId, title: "", dateCreated: "", description: "", languageOptions: { languageLonghand: "", languageShorthand: "", countryCode: "" }}
    }

    private generateDataRichPack(data: any): Pack {
        return { packId: data.id, title: data.title, dateCreated: data.dateCreated, description: data.description, languageOptions: { languageLonghand: data.languageOptions.languageLonghand, languageShorthand: data.languageOptions.languageShorthand, countryCode: data.languageOptions.countryCode } }
    }

}

export default PackDAO;