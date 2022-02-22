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
var CardDAO_1 = __importDefault(require("../dao/CardDAO"));
var RequestActions_1 = __importDefault(require("../utils/RequestActions"));
var CardController = /** @class */ (function (_super) {
    __extends(CardController, _super);
    function CardController() {
        var _this = _super.call(this) || this;
        _this._dao = new CardDAO_1.default();
        return _this;
    }
    CardController.prototype.getCards = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.requestContainsId(req)) {
                    response = this.handleNonexistentRequestId();
                }
                else {
                    if (!this.requestHasValidId(req)) {
                        response = this.handleInvalidRequestId();
                    }
                    else {
                        response = this._dao.getCardsByPackId(req.id).then(function (data) {
                            return _this.handleCardDAOResponse(data, RequestActions_1.default.GET);
                        });
                    }
                }
                return [2 /*return*/, response];
            });
        });
    };
    CardController.prototype.createCards = function (req) {
        var response;
        if (!this.requestContainsId(req)) {
            response = this.handleNonexistentRequestId();
        }
        else {
            if (!this.requestHasValidId(req)) {
                response = this.handleInvalidRequestId();
            }
            else {
                var validityObject = this.isCardsDataValid(req);
                if (!validityObject.valid) {
                    response = this.handleInvalidRequestParamsOrBody(validityObject.message);
                }
                else {
                    if (this._dao.createNewCards(req)) {
                        response = this.handleCardDAOResponse(null, RequestActions_1.default.POST);
                    }
                    else {
                        response = this.handleDatabaseIssue(RequestActions_1.default.POST);
                    }
                }
            }
        }
        return response;
    };
    CardController.prototype.editCards = function (req) {
        var response;
        if (!this.requestContainsId(req)) {
            response = this.handleNonexistentRequestId();
        }
        else {
            if (!this.requestHasValidId(req)) {
                response = this.handleInvalidRequestId();
            }
            else {
                if (!this.requestContainsCardsData(req)) {
                    response = this.handleNonExistentCardsData();
                }
                else {
                    if (!this.isCardsEditDataValid(req.cards)) {
                        response = this.handleInvalidRequestParamsOrBody(["Request contains invalid body parameter(s) for cards"]);
                    }
                    else {
                        if (this._dao.editCardsData(req)) {
                            response = this.handleCardDAOResponse(null, RequestActions_1.default.PUT);
                        }
                        else {
                            response = this.handleDatabaseIssue(RequestActions_1.default.PUT);
                        }
                    }
                }
            }
        }
        return response;
    };
    CardController.prototype.requestContainsCardsData = function (req) {
        return "cards" in req;
    };
    CardController.prototype.isCardsEditDataValid = function (data) {
        var isValid = true;
        var validKeys = [
            "cardId",
            "translated",
            "untranslated"
        ];
        var editDataKeys = Object.keys(data);
        editDataKeys.forEach(function (key) {
            if (!validKeys.includes(key))
                isValid = false;
        });
        return isValid;
    };
    CardController.prototype.isCardsDataValid = function (data) {
        var isValid = true;
        var message = [];
        if (!("cards" in data)) {
            isValid = false;
            message.push("Request has no cards");
        }
        data.cards.forEach(function (c) {
            if (!("untranslated" in c)) {
                isValid = false;
                message.push("One or more cards in the request are missing untranslated vocab");
                return;
            }
            if (!("translated" in c)) {
                isValid = false;
                message.push("One or more cards in the request are missing translated vocab");
                return;
            }
            if (!("cardId" in c)) {
                isValid = false;
                message.push("One or more cards in the request are missing a cardId");
                return;
            }
        });
        return { valid: isValid, message: message };
    };
    CardController.prototype.handleCardDAOResponse = function (responseData, action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { responseCode: 200, message: "Cards " + action + " successful", data: responseData }];
            });
        });
    };
    CardController.prototype.handleNonExistentCardsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, { responseCode: 400, message: "Request does not contain cards data", data: null }];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CardController;
}(Controller_1.default));
exports.default = CardController;
