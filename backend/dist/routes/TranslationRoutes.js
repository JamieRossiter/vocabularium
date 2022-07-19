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
var TranslationController_1 = __importDefault(require("../controllers/TranslationController"));
var TranslationRoutes = /** @class */ (function (_super) {
    __extends(TranslationRoutes, _super);
    function TranslationRoutes(app) {
        var _this = _super.call(this, app, "/translate") || this;
        _this._controller = new TranslationController_1.default();
        return _this;
    }
    TranslationRoutes.prototype.initializeGetRoutes = function () {
        var _this = this;
        this._server.get(this._url, function (req, res) {
            _this._controller.translate(req.query).then(function (translation) {
                res.status(translation.statusCode).send(translation);
            });
        });
    };
    TranslationRoutes.prototype.initializePostRoutes = function () { };
    TranslationRoutes.prototype.initializePutRoutes = function () { };
    TranslationRoutes.prototype.initializeDeleteRoutes = function () { };
    return TranslationRoutes;
}(Routes_1.default));
exports.default = TranslationRoutes;
