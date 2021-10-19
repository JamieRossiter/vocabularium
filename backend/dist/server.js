"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServerConfig_1 = __importDefault(require("./configuration/ServerConfig"));
var PackRoutes_1 = __importDefault(require("./routes/PackRoutes"));
var CardRoutes_1 = __importDefault(require("./routes/CardRoutes"));
// Configure Server
var server = new ServerConfig_1.default();
server.app.listen(server.port, function () {
    console.log("Vocabularium server (v1.0) is listening on port " + server.port + ".");
});
// Configure Routes
var packRoutes = new PackRoutes_1.default(server.app);
var cardRoutes = new CardRoutes_1.default(server.app);
