"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatusCodes_1 = __importDefault(require("../utils/HTTPStatusCodes"));
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.idIsValid = function (id) {
        var isValid = true;
        if (isNaN(id)) {
            isValid = false;
        }
        if (!(id.toString().length > 0 && id.toString().length < 6)) {
            isValid = false;
        }
        return isValid;
    };
    Controller.prototype.requestContainsId = function (req) {
        return "packId" in req;
    };
    Controller.prototype.requestHasValidId = function (req) {
        var isValid = true;
        if (!this.requestContainsId(req)) {
            isValid = false;
        }
        if (!this.idIsValid(req.packId)) {
            isValid = false;
        }
        return isValid;
    };
    Controller.prototype.handleNonexistentRequestId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, { statusCode: HTTPStatusCodes_1.default.BadRequest, success: true, message: "Request does not contain id" }];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Controller.prototype.handleInvalidRequestId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, { statusCode: HTTPStatusCodes_1.default.BadRequest, success: true, message: "Request contains invalid Id" }];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Controller.prototype.handleInvalidRequestParamsOrBody = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { statusCode: HTTPStatusCodes_1.default.BadRequest, success: true, message: message.toString() }];
            });
        });
    };
    Controller.prototype.handleDatabaseIssue = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, { statusCode: 500, success: true, message: action + " request was unsuccessful due to a database issue" }];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; // DEPRECATED
    Controller.prototype.createHTTPResponse = function (status, msg) {
        var isSuccessful = true;
        if (!(status >= 200 && status <= 299))
            isSuccessful = false;
        return { statusCode: status, success: isSuccessful, message: msg };
    };
    return Controller;
}());
exports.default = Controller;
