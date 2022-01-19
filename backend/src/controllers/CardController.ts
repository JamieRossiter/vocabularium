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
            if(this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {

                let validityObject = this.isCardsDataValid(req)
                if(!validityObject.valid){
                    response = this.handleInvalidRequestParamsOrBody(validityObject.message)
                } else {
                    if(this._dao.createNewCards(req)){
                        response = this.handleCardDAOResponse(null, RequestActions.POST)
                    } else {
                        response = this.handlePostDatabaseIssue();
                    }
                }
                
            }
        }
        return response;
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
                message.push("One or more cards in the request are missing untranslated vocab")
                return;
            }
        })

        return { valid: isValid, message: message }
    }

    private async handleCardDAOResponse(responseData: Cards | null, action: string): Promise<ServerResponse> {
        return { responseCode: 200, message: `Cards ${action} successful`, data: responseData }
    }

}

export default CardController;