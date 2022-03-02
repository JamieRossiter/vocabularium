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
var PackController_1 = __importDefault(require("../controllers/PackController"));
var PackRoutes = /** @class */ (function (_super) {
    __extends(PackRoutes, _super);
    function PackRoutes(app) {
        var _this = _super.call(this, app, "/pack") || this;
        _this._controller = new PackController_1.default();
        return _this;
    }
    PackRoutes.prototype.initializeGetRoutes = function () {
        var _this = this;
        this._server.get(this._url, function (req, res) {
            _this._controller.getPack(req.query).then(function (pack) {
                res.status(pack.statusCode).send(pack);
            });
        });
    };
    PackRoutes.prototype.initializePostRoutes = function () {
        var _this = this;
        this._server.post(this._url, function (req, res) {
            _this._controller.createPack(req.body).then(function (postRes) {
                res.status(postRes.statusCode).send(postRes);
            });
        });
    };
    PackRoutes.prototype.initializePutRoutes = function () {
        var _this = this;
        this._server.put(this._url, function (req, res) {
            _this._controller.editPack(req.body).then(function (putRes) {
                res.status(putRes.statusCode).send(putRes);
            });
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
