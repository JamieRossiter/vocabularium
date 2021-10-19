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
var PackRoutes = /** @class */ (function (_super) {
    __extends(PackRoutes, _super);
    function PackRoutes(app) {
        return _super.call(this, app, "/packs") || this;
    }
    PackRoutes.prototype.initializeGetRoutes = function () {
        this._server.get(this._url, function (req, response) {
            console.log("Successful Get!");
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
