"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ServerConfiguration = /** @class */ (function () {
    function ServerConfiguration() {
        this._app = (0, express_1.default)();
        this._port = 5000;
        this.configure();
    }
    ServerConfiguration.prototype.configure = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Object.defineProperty(ServerConfiguration.prototype, "app", {
        get: function () {
            return this._app;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerConfiguration.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return ServerConfiguration;
}());
exports.default = ServerConfiguration;
