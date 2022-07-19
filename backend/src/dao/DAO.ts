import { MongoClient, Collection, Db }  from "mongodb"

class DAO {

    protected _uri: string;
    protected _client: MongoClient;
    protected _dbName: string;
    
    constructor(){
        this._uri = "mongodb://database:27017";
        this._client = new MongoClient(this._uri);
        this._dbName = "vocabularium";
    }

    public async connectToDb(): Promise<boolean> {
        let connected: boolean = false;
        try {
            await this._client.connect();
            connected = true;
        } catch (error: any){
            console.error(error);
            connected = false;
        }
        return connected;
    }

    protected async accessCollection(collectionName: string): Promise<Collection> {
        const db: Db = this._client.db(this._dbName);
        const collection: Collection = db.collection(collectionName);
        return collection;
    }

    // TODO: This needs to be fundamentally changed. There needs to be a way that this code can handle an unreachable database and present the corresponding error message.
    protected accessDb(collectionName: string, client: MongoClient): Collection {
        client.connect();
        const db: Db = this._client.db(this._dbName);
        const collection: Collection = db.collection(collectionName);
        return collection;
    }
}

export default DAO;