"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = __importDefault(require("./Routes"));
var PackDAO_1 = __importDefault(require("../dao/PackDAO"));
var PackRoutes = /** @class */ (function (_super) {
    __extends(PackRoutes, _super);
    function PackRoutes(app) {
        var _this = _super.call(this, app, "/packs") || this;
        _this._dao = new PackDAO_1.default();
        return _this;
    }
    PackRoutes.prototype.initializeGetRoutes = function () {
        var _this = this;
        this._server.get(this._url, function (req, response) {
            _this._dao.getPack("18736").then(function (pack) {
                console.log(pack); // This also returns successfully. Pass req.query through to a service or controller layer and let them handle all the necessary checks.
            });
        });
    };
    PackRoutes.prototype.initializePostRoutes = function () {
        this._server.post(this._url, function (req, response) {
            console.log("Successful Post!");
        });
    };
    PackRoutes.prototype.initializePutRoutes = function () {
        this._server.put(this._url, function (req, response) {
            console.log("Successful Put!");
        });
    };
    PackRoutes.prototype.initializeDeleteRoutes = function () {
        this._server.put(this._url, function (req, response) {
            console.log("Successful Delete!");
        });
    };
    return PackRoutes;
}(Routes_1.default));
exports.default = PackRoutes;
