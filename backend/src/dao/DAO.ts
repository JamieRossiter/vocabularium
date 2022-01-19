import { MongoClient, Collection, Db }  from "mongodb"

class DAO {

    protected _uri: string;
    protected _client: MongoClient;
    protected _dbName: string;
    
    constructor(){
        this._uri = "mongodb://127.0.0.1:27017";
        this._client = new MongoClient(this._uri);
        this._dbName = "vocabularium";
    }

    protected accessDb(collectionName: string, client: MongoClient): Collection {
        client.connect();
        const db: Db = this._client.db(this._dbName);
        const collection: Collection = db.collection(collectionName);
        return collection;
    }
}

export default DAO;