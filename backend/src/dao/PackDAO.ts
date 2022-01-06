import DAO from "./DAO";

type Pack = {
    success: boolean,
    id: string,
    title: string,
    dateCreated: string,
    description: string,
    languageOptions: {
        languageLonghand: string,
        languageShorthand: string,
        countryCode: string 
    }
}

class PackDAO extends DAO {

    private _collectionName: string
    
    constructor(){
        super();
        this._collectionName = "packs"
    }

    // TODO: Test!
    async getPack(packId: string): Promise<Pack> {
        const query: { id: string } = { id: packId };
        return await this.accessDb(this._collectionName, this._client).findOne(query) // Keep in mind that the connection is not awaited on the parent method. This could cause an issue.
        .then(result => {
            let packData: Pack;
            if(!result) {
                packData = { success: false, id: packId, title: "", dateCreated: "", description: "", languageOptions: { languageLonghand: "", languageShorthand: "", countryCode: "" }}
            } else {
                packData = { success: true, id: result.id, title: result.title, dateCreated: result.dateCreated, description: result.description, languageOptions: { languageLonghand: result.languageOptions.languageLonghand, languageShorthand: result.languageOptions.languageShorthand, countryCode: result.languageOptions.countryCode } }
            }
            this._client.close();
            return packData;
        })
        .catch(error => {
            let errorData: Pack;
            console.error(error);
            this._client.close();
            errorData = { success: false, id: packId, title: "", dateCreated: "", description: "", languageOptions: { languageLonghand: "", languageShorthand: "", countryCode: "" }}
            return errorData;
        })
    }

}

export default PackDAO;