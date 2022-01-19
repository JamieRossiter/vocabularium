"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var DAO = /** @class */ (function () {
    function DAO() {
        this._uri = "mongodb://127.0.0.1:27017";
        this._client = new mongodb_1.MongoClient(this._uri);
        this._dbName = "vocabularium";
    }
    DAO.prototype.accessDb = function (collectionName, client) {
        client.connect();
        var db = this._client.db(this._dbName);
        var collection = db.collection(collectionName);
        return collection;
    };
    return DAO;
}());
exports.default = DAO;
