"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(server, url) {
        this._server = server;
        this._url = url;
        this.initializeAllRoutes();
    }
    Routes.prototype.initializeAllRoutes = function () {
        this.initializeGetRoutes();
        this.initializePostRoutes();
        this.initializePutRoutes();
        this.initializeDeleteRoutes();
    };
    return Routes;
}());
exports.default = Routes;
