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
var CardRoutes = /** @class */ (function (_super) {
    __extends(CardRoutes, _super);
    function CardRoutes(app) {
        return _super.call(this, app, "/cards") || this;
    }
    CardRoutes.prototype.initializeGetRoutes = function () {
        this._server.get(this._url, function (req, response) {
            console.log("Successful Get!");
        });
    };
    CardRoutes.prototype.initializePostRoutes = function () {
        this._server.post(this._url, function (req, response) {
            console.log("Successful Post!");
        });
    };
    CardRoutes.prototype.initializePutRoutes = function () {
        this._server.put(this._url, function (req, response) {
            console.log("Successful Put!");
        });
    };
    CardRoutes.prototype.initializeDeleteRoutes = function () {
        this._server.put(this._url, function (req, response) {
            console.log("Successful Delete!");
        });
    };
    return CardRoutes;
}(Routes_1.default));
exports.default = CardRoutes;
