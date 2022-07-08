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
var Controller_1 = __importDefault(require("./Controller"));
var PackDAO_1 = __importDefault(require("../dao/PackDAO"));
var HTTPStatusCodes_1 = __importDefault(require("../utils/HTTPStatusCodes"));
var PackController = /** @class */ (function (_super) {
    __extends(PackController, _super);
    function PackController() {
        var _this = _super.call(this) || this;
        _this._dao = new PackDAO_1.default();
        return _this;
    }
    PackController.prototype.getPack = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var status, message, error;
            var _this = this;
            return __generator(this, function (_a) {
                status = HTTPStatusCodes_1.default.Success;
                error = false;
                // Connect to the database
                return [2 /*return*/, this._dao.connectToDb().then(function (connected) {
                        // Sanitise data
                        if (!connected) {
                            status = HTTPStatusCodes_1.default.ServerError;
                            message = "There was a fatal error with the database.";
                            error = true;
                        }
                        if (!_this.requestContainsId(req)) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = "Request does not contain a 'packId' query parameter.";
                            error = true;
                        }
                        else {
                            if (!_this.requestHasValidId(req)) {
                                status = HTTPStatusCodes_1.default.BadRequest;
                                message = "Request does not contain a valid 'packId' query parameter.";
                                error = true;
                            }
                        }
                        // Run if data is invalid
                        if (error) {
                            return new Promise(function (resolve, reject) {
                                resolve(_this.createHTTPResponse(status, message));
                                reject(new Error("Error resolving promise pertaining to following response: " + message));
                            });
                        }
                        // Run if data is valid
                        return _this._dao.findPackById(req.packId).then(function (response) {
                            if (!response) {
                                status = HTTPStatusCodes_1.default.NotFound;
                                message = "No match found for Pack ID: " + req.packId;
                            }
                            else {
                                message = JSON.stringify(response);
                            }
                            return _this.createHTTPResponse(status, message);
                        });
                    })];
            });
        });
    };
    PackController.prototype.createPack = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var status, message, error;
            var _this = this;
            return __generator(this, function (_a) {
                status = HTTPStatusCodes_1.default.Success;
                error = false;
                return [2 /*return*/, this._dao.connectToDb().then(function (connected) {
                        // Sanitise data
                        var validatedBody = _this.isCreateBodyValid(req);
                        if (!validatedBody.valid) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = validatedBody.message.toString();
                            error = true;
                        }
                        if (!connected) {
                            status = HTTPStatusCodes_1.default.ServerError;
                            message = "There was a fatal error with the database.";
                            error = true;
                        }
                        if (!_this.requestContainsId(req)) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = "Request does not contain a 'packId' body parameter.";
                            error = true;
                        }
                        else {
                            if (!_this.requestHasValidId(req)) {
                                status = HTTPStatusCodes_1.default.BadRequest;
                                message = "Request does not contain a valid 'packId' query parameter.";
                                error = true;
                            }
                        }
                        // Run if the data is invalid
                        if (error) {
                            return new Promise(function (resolve, reject) {
                                resolve(_this.createHTTPResponse(status, message));
                                reject(new Error("Error resolving promise pertaining to following response: " + message));
                            });
                        }
                        // Run if data is valid
                        return _this._dao.insertPackByData(req).then(function (response) {
                            if (!response.acknowledged) {
                                status = HTTPStatusCodes_1.default.ServerError;
                                message = "Could not insert document: " + req + " due to a database error.";
                            }
                            else {
                                message = JSON.stringify(req);
                            }
                            return _this.createHTTPResponse(status, message);
                        });
                    })];
            });
        });
    };
    PackController.prototype.editPack = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var status, message, error;
            var _this = this;
            return __generator(this, function (_a) {
                status = HTTPStatusCodes_1.default.Success;
                error = false;
                return [2 /*return*/, this._dao.connectToDb().then(function (connected) {
                        // Sanitise data
                        var validatedBody = _this.isEditBodyValid(req);
                        if (!validatedBody) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = "Request does not contain a valid body.";
                            error = true;
                        }
                        if (!connected) {
                            status = HTTPStatusCodes_1.default.ServerError;
                            message = "There was a fatal error with the database.";
                            error = true;
                        }
                        if (!_this.requestContainsId(req)) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = "Request does not contain a 'packId' body parameter.";
                            error = true;
                        }
                        else {
                            if (!_this.requestHasValidId(req)) {
                                status = HTTPStatusCodes_1.default.BadRequest;
                                message = "Request does not contain a valid 'packId' query parameter.";
                                error = true;
                            }
                        }
                        // Run if the data is invalid
                        if (error) {
                            return new Promise(function (resolve, reject) {
                                resolve(_this.createHTTPResponse(status, message));
                                reject(new Error("Error resolving promise pertaining to following response: " + message));
                            });
                        }
                        // Run if data is valid
                        return _this._dao.editPackByData(req).then(function (response) {
                            if (!response.acknowledged) {
                                status = HTTPStatusCodes_1.default.ServerError;
                                message = "Could not update document: " + req + " due to a database error.";
                            }
                            else {
                                message = JSON.stringify(req);
                            }
                            return _this.createHTTPResponse(status, message);
                        });
                    })];
            });
        });
    };
    PackController.prototype.deletePack = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var status, message, error;
            var _this = this;
            return __generator(this, function (_a) {
                status = HTTPStatusCodes_1.default.Success;
                error = false;
                // Connect to the database
                return [2 /*return*/, this._dao.connectToDb().then(function (connected) {
                        // Sanitise data
                        if (!connected) {
                            status = HTTPStatusCodes_1.default.ServerError;
                            message = "There was a fatal error with the database.";
                            error = true;
                        }
                        if (!_this.requestContainsId(req)) {
                            status = HTTPStatusCodes_1.default.BadRequest;
                            message = "Request does not contain a 'packId' query parameter.";
                            error = true;
                        }
                        else {
                            if (!_this.requestHasValidId(req)) {
                                status = HTTPStatusCodes_1.default.BadRequest;
                                message = "Request does not contain a valid 'packId' query parameter.";
                                error = true;
                            }
                        }
                        // Run if data is invalid
                        if (error) {
                            return new Promise(function (resolve, reject) {
                                resolve(_this.createHTTPResponse(status, message));
                                reject(new Error("Error resolving promise pertaining to following response: " + message));
                            });
                        }
                        // Run if data is valid
                        return _this._dao.deletePackById(req.packId).then(function (response) {
                            if (!response) {
                                status = HTTPStatusCodes_1.default.NotFound;
                                message = "No match found for Pack ID: " + req.packId;
                            }
                            else {
                                message = JSON.stringify(response);
                            }
                            return _this.createHTTPResponse(status, message);
                        });
                    })];
            });
        });
    };
    PackController.prototype.isEditBodyValid = function (data) {
        var isValid = true;
        var validKeys = [
            "packId",
            "title",
            "dateCreated",
            "description",
            "languageOptions"
        ];
        var editDataKeys = Object.keys(data);
        editDataKeys.forEach(function (key) {
            if (!validKeys.includes(key))
                isValid = false;
        });
        return isValid;
    };
    PackController.prototype.isCreateBodyValid = function (data) {
        var isValid = true;
        var message = [];
        if (!("title" in data)) {
            isValid = false;
            message.push("Request has no title");
        }
        if (!("dateCreated" in data)) {
            isValid = false;
            message.push("Request has no creation date");
        }
        if (!("description" in data)) {
            isValid = false;
            message.push("Request has no description");
        }
        if (!("languageOptions" in data)) {
            isValid = false;
            message.push("Request has no language options");
        }
        if (!("languageLonghand" in data.languageOptions)) {
            isValid = false;
            message.push("Request has no language longhand code");
        }
        if (!("languageShorthand" in data.languageOptions)) {
            isValid = false;
            message.push("Request has no language shorthand code");
        }
        if (!("countryCode" in data.languageOptions)) {
            isValid = false;
            message.push("Request has no language country code");
        }
        return { valid: isValid, message: message };
    };
    return PackController;
}(Controller_1.default));
exports.default = PackController;
