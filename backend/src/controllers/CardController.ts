import Controller from "./Controller";
import CardDAO from "../dao/CardDAO";
import ServerResponse from "../utils/ServerResponse";
import RequestActions from "../utils/RequestActions";
import { Cards } from "../utils/Cards";

class CardController extends Controller {

    private _dao: CardDAO = new CardDAO()

    constructor(){
        super();
    }

    public async getCards(req: any): Promise<ServerResponse>{
        let response: Promise<ServerResponse>;
        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(!this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {
                response = this._dao.getCardsByPackId(req.id).then(data => {
                    return this.handleCardDAOResponse(data, RequestActions.GET);
                })
            }
        }
        return response;
    }

    public createCards(req: any): Promise<ServerResponse> {
        let response: Promise<ServerResponse>

        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(!this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {

                let validityObject = this.isCardsDataValid(req)
                if(!validityObject.valid){
                    response = this.handleInvalidRequestParamsOrBody(validityObject.message)
                } else {
                    if(this._dao.createNewCards(req)){
                        response = this.handleCardDAOResponse(null, RequestActions.POST)
                    } else {
                        response = this.handleDatabaseIssue(RequestActions.POST);
                    }
                }
                
            }
        }
        return response;
    }

    public editCards(req: any): Promise<ServerResponse> {
        let response: Promise<ServerResponse>

        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(!this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {
                if(!this.requestContainsCardsData(req)){
                    response = this.handleNonExistentCardsData();
                } else {
                    if(!this.isCardsEditDataValid(req.cards)){
                        response = this.handleInvalidRequestParamsOrBody(["Request contains invalid body parameter(s) for cards"])
                    } else {
                        if(this._dao.editCardsData(req)){
                            response = this.handleCardDAOResponse(null, RequestActions.PUT);
                        } else {
                            response = this.handleDatabaseIssue(RequestActions.PUT);
                        }
                    }
                }
            }
        }
        return response;
    }

    private requestContainsCardsData(req: any): boolean {
        return "cards" in req;
    }

    private isCardsEditDataValid(data: any): boolean {
        let isValid: boolean = true;
        let validKeys: Array<string> = 
        [
            "cardId",
            "translated",
            "untranslated"
        ]
        let editDataKeys: Array<string> = Object.keys(data);
        editDataKeys.forEach(key => {
            if(!validKeys.includes(key)) isValid = false;
        })
        return isValid;
    }

    private isCardsDataValid(data: any): { valid: boolean, message: Array<string> } {
        let isValid: boolean = true
        let message: Array<string> = []

        if(!("cards" in data)){
            isValid = false;
            message.push("Request has no cards")
        }

        data.cards.forEach((c: any) => {
            if(!("untranslated" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing untranslated vocab")
                return;
            }
            if(!("translated" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing translated vocab")
                return;
            }
            if(!("cardId" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing a cardId")
                return;
            }
        })

        return { valid: isValid, message: message }
    }

    private async handleCardDAOResponse(responseData: Cards | null, action: string): Promise<ServerResponse> {
        return { statusCode: 200, success: true, message: `Cards ${action} successful` }
    }

    private async handleNonExistentCardsData(): Promise<ServerResponse>{
        return await { statusCode: 400, success: true, message: "Request does not contain cards data" }
    }

}

export default CardController;