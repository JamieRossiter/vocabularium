import Mongo from "mongodb"

class DAO {

    protected _uri: string;
    protected _client: Mongo.MongoClient;
    protected _dbName: string;
    
    constructor(){
        this._uri = "insert_uri_here";
        this._client = new Mongo.MongoClient(this._uri);
        this._dbName = "vocabularium";
    }

    protected accessDb(collectionName: string, client: Mongo.MongoClient): Mongo.Collection {
        client.connect(); // This method is not awaited because the method is not async. Monitor, as this could cause issues.
        const db: Mongo.Db = this._client.db(this._dbName);
        const collection: Mongo.Collection = db.collection(collectionName);
        return collection;
    }
}

export default DAO;