"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatusCodes;
(function (HTTPStatusCodes) {
    HTTPStatusCodes[HTTPStatusCodes["NotFound"] = 404] = "NotFound";
    HTTPStatusCodes[HTTPStatusCodes["Success"] = 200] = "Success";
    HTTPStatusCodes[HTTPStatusCodes["BadRequest"] = 400] = "BadRequest";
    HTTPStatusCodes[HTTPStatusCodes["ServerError"] = 500] = "ServerError";
})(HTTPStatusCodes || (HTTPStatusCodes = {}));
exports.default = HTTPStatusCodes;
